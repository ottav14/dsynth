<script setup>
import Module from './Module.vue';
import Dropdown from './Dropdown.vue';
import Range from './Range.vue';
import getAudioCtx from '../audioCtx.js';
import { ref, watch } from 'vue';

const audioCtx = getAudioCtx();
const filterType = ref('lowpass');

watch(filterType, (newFilterType) => {
});

function onLevelInput(e) {
}

function onResonanceInput(e) {
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
