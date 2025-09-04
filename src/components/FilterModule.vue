<script setup>
import Module from './Module.vue';
import Dropdown from './Dropdown.vue';
import Range from './Range.vue';
import getAudioCtx from '../audioCtx.js';
import { ref, watch } from 'vue';

const audioCtx = getAudioCtx();
const filterType = ref('lowpass');

const props = defineProps({
	state: Object
});
const emit = defineEmits(['update']);

watch(filterType, (newFilterType) => {
	props.state.mode = newFilterType;
	emit('update', props.state);
});

function onLevelInput(e) {
	props.state.level = e.target.value;
	emit('update', props.state);
}

function onResonanceInput(e) {
	props.state.resonance = e.target.value;
	emit('update', props.state);
}
</script>

<template>
<Module label="Filter">
	<Dropdown label="Type" :items="['Low Pass', 'High Pass']" v-model="filterType" />
	<Range label="Level" min="20" max="4200" @input="onLevelInput" />
	<Range label="Resonance" min="0.1" max="1000" @input="onResonanceInput" />
</Module>
</template>

<style scoped>
</style>
