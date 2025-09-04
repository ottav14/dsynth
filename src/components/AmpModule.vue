<script setup>
import Module from './Module.vue';
import Range from './Range.vue';
import Checkbox from './Checkbox.vue';
import { ref, defineProps, defineEmits } from 'vue';
import getAudioCtx from '../audioCtx.js';

const oscillatorTypes = [ 'sine', 'triangle', 'sawtooth', 'square' ];
const audioCtx = getAudioCtx();

const props = defineProps({
	state: Object
});
const emit = defineEmits(['update']);

function onGainInput(e) {
	props.state.gain = e.target.value;
	emit('update', props.state);
}

function onMuteInput(e) {
	props.state.mute = e.target.checked;
	emit('update', props.state);
}

</script>

<template>
<Module label="Amp">
	<Range label="Gain" min="0" max="100" @input="onGainInput" />
	<Checkbox label="Mute" :value="props.state.mute" @change="onMuteInput" />
</Module>
</template>

<style scoped>
</style>
