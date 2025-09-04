<script setup>
import Module from './components/Module.vue';
import Dropdown from './components/Dropdown.vue';
import Range from './components/Range.vue';
import Checkbox from './components/Checkbox.vue';
import AmpModule from './components/AmpModule.vue';
import OscillatorModule from './components/OscillatorModule.vue';
import FilterModule from './components/FilterModule.vue';
import getAudioCtx from './audioCtx.js';
import { ref, onMounted, watch } from 'vue';

const audioCtx = getAudioCtx();
const oscillatorTypes = [ 'sine', 'triangle', 'sawtooth', 'square' ];
const filter = audioCtx.createBiquadFilter();
filter.type = 'lowpass';
filter.frequency.value = 440;
filter.Q.value = 1; // resonance

const ampState = ref({
	gain: 50,
	mute: true,
});
const gainNodes = [];

const oscState = ref({
	mode: 0,
	frequency: 440,
});
const oscillators = [];

const filterState = ref({
	mode: 0,
	level: 440,
	resonance: 1,
});

onMounted(() => {


	for(let i=0; i<oscillatorTypes.length; i++) {

		const gainNode = audioCtx.createGain();
		gainNode.gain.value = 0;
		gainNodes.push(gainNode);

		const osc = audioCtx.createOscillator();
		osc.type = oscillatorTypes[i];
		osc.frequency.value = oscState.value.frequency;
		oscillators.push(osc);

		oscillators[i].connect(gainNodes[i]).connect(filter).connect(audioCtx.destination);
		oscillators[i].start();
	}


});

function muteAllOscillators() {
	for(const gn of gainNodes)
		gn.gain.value = 0;
}

watch(ampState, (state, oldState) => {
	gainNodes[oscState.value.mode].gain.value = state.mute ? 0 : state.gain / 100;
});

watch(oscState, (state, oldState) => {
	if(gainNodes) {
		muteAllOscillators();
		gainNodes[oscState.value.mode].gain.value = ampState.value.mute ? 0 : ampState.value.gain / 100;
		oscillators[oscState.value.mode].frequency.value = oscState.value.frequency;
		console.log('piss');
	}
});

watch(filterState, (state, oldState) => {
	filter.type = parseInt(filterState.value.mode) === 0 ? 'lowpass' : 'highpass';
	filter.frequency.value = filterState.value.level;
	filter.Q.value = filterState.value.resonance;
	console.log(filter.type);
});

function updateAmpState(newAmpState) {
	ampState.value = { ...newAmpState };
}

function updateOscState(newOscState) {
	oscState.value = { ...newOscState };
}

function updateFilterState(newFilterState) {
	filterState.value = { ...newFilterState };
}

</script>

<template>
<main>
	<div id="ui">
		<OscillatorModule :state="oscState" @update="updateOscState"/>
		<FilterModule :state="filterState" @update="updateFilterState" />
		<AmpModule :state="ampState" @update="updateAmpState" />
	</div>
</main>
</template>

<style scoped>
main {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

#ui {
	display: flex;
}
</style>
