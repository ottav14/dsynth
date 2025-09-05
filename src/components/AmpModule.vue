<script setup>
import Module from './Module.vue';
import Range from './Range.vue';
import Checkbox from './Checkbox.vue';
import { ref } from 'vue';
import getAudioCtx from '../audioCtx.js';
import getMasterGain from '../masterGain.js';

const oscillatorTypes = [ 'sine', 'triangle', 'sawtooth', 'square' ];
const audioCtx = getAudioCtx();
const masterGain = getMasterGain();
const gain = ref(0.5);
const mute = ref(true);

const props = defineProps({
	state: Object
});
const emit = defineEmits(['update']);

function onGainInput(e) {
	gain.value = e.target.value / 100;
	masterGain.gain.value = mute.value * gain.value;
}

function onMuteInput(e) {
	mute.value = !e.target.checked;
	masterGain.gain.value = mute.value * gain.value;
}

</script>

<template>
<Module label="Amp">
	<Range label="Gain" value="20" min="0" max="100" @input="onGainInput" />
	<Checkbox label="Mute" @change="onMuteInput" />
</Module>
</template>

<style scoped>
</style>
