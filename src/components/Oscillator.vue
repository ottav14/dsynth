<script setup>
import Dropdown from './Dropdown.vue';
import Range from './Range.vue';
import getAudioCtx from '../audioCtx.js';
import { ref, watch, defineProps, defineEmits } from 'vue';

const audioCtx = getAudioCtx();
const oscillatorTypes = [ 'sine', 'triangle', 'sawtooth', 'square' ];

const oscType = ref('sine');

const props = defineProps({
	state: Object
});
const emit = defineEmits(['update']);

watch(oscType, (newOscType) => {
	props.state.mode = newOscType;
	emit('update', props.state);
});

function onFrequencyInput(e) {
	props.state.frequency = e.target.value;
	emit('update', props.state);
}
</script>

<template>
<Dropdown label="Mode" :items="['Sine', 'Triangle', 'Sawtooth', 'Square']" v-model="oscType" />
<Range label="Frequency" min="20" max="4200" :value="props.state.frequency" @input="onFrequencyInput" />
</template>

<style scoped>
</style>
