<script setup>
import Module from './Module.vue';
import Dropdown from './Dropdown.vue';
import Range from './Range.vue';
import getAudioCtx from '../audioCtx.js';
import getFilterEngine from '../FilterEngine.js';
import { ref, watch } from 'vue';

const audioCtx = getAudioCtx();
const filterEngine = getFilterEngine();
const filterType = ref('sine');

watch(filterType, (newFilterType) => {
	filterEngine.setMode(newFilterType);
});

function onLevelInput(e) {
	filterEngine.setLevel(e.target.value);
}

function onResonanceInput(e) {
	filterEngine.setResonance(e.target.value);
}
</script>

<template>
<Module label="Filter">
	<Dropdown label="Type" :items="['Low Pass', 'High Pass']" v-model="filterType" />
	<Range label="Level" value="440" min="20" max="4200" @input="onLevelInput" />
	<Range label="Resonance" value="1" min="0.1" max="10" @input="onResonanceInput" />
</Module>
</template>

<style scoped>
</style>
