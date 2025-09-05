<script setup>
import Module from './Module.vue';
import Range from './Range.vue';
import Checkbox from './Checkbox.vue';
import { ref, defineProps, defineEmits } from 'vue';
import getAudioCtx from '../audioCtx.js';
import getMasterGain from '../masterGain.js';

const oscillatorTypes = [ 'sine', 'triangle', 'sawtooth', 'square' ];
const audioCtx = getAudioCtx();
const masterGain = getMasterGain();
const gain = ref(0.5);

const props = defineProps({
	state: Object
});
const emit = defineEmits(['update']);

function onGainInput(e) {
	gain.value = e.target.value / 100;
	masterGain.gain.value = gain.value;
}

function onMuteInput(e) {
	masterGain.gain.value = !e.target.checked * gain.value;
}

</script>

<template>
<Module label="Amp">
	<Range label="Gain" min="0" max="100" @input="onGainInput" />
	<Checkbox label="Mute" @change="onMuteInput" />
</Module>
</template>

<style scoped>
</style>
