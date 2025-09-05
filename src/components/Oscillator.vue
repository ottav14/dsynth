<script setup>
import Dropdown from './Dropdown.vue';
import Range from './Range.vue';
import getAudioCtx from '../audioCtx.js';
import OscillatorEngine from '../OscillatorEngine.js';
import getFilterEngine from '../FilterEngine.js';
import getMasterGain from '../masterGain.js';
import { ref, watch } from 'vue';

const audioCtx = getAudioCtx();
const masterGain = getMasterGain();
const oscillatorTypes = [ 'sine', 'triangle', 'sawtooth', 'square' ];

const oscType = ref('sine');

const oscillatorEngine = new OscillatorEngine(audioCtx);
const filter = getFilterEngine().filter;
oscillatorEngine.connectChain(filter, masterGain);
oscillatorEngine.startOscillators();

const props = defineProps({
	state: Object,
	count: {
		type: String,
		required: true,
	},
});
const emit = defineEmits(['update']);

watch(oscType, (newOscType) => {
	oscillatorEngine.changeMode(newOscType);
});

function onFrequencyInput(e) {
	oscillatorEngine.changeFrequency(e.target.value);
}
</script>

<template>
<div id="container">
	<p id="label">Osc {{ count }}</p>
	<Dropdown id="mode" label="Mode" :items="['Sine', 'Triangle', 'Sawtooth', 'Square']" v-model="oscType" />
	<Range label="Frequency" min="20" max="4200" value="440" @input="onFrequencyInput" />
</div>
</template>

<style scoped>
#container {
	display: flex;
}

#mode {
	padding-right: 3rem;
}

#label {
	display: flex;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	padding-right: 3rem;
}
</style>
