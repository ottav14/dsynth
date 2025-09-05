<script setup>
import Module from './Module.vue';
import Oscillator from './Oscillator.vue';
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
	state: Object
});
const emit = defineEmits(['update']);

function updateState(state) {
	emit('update', state);
}

</script>

<template>
<Module label="Oscillator">
	<Oscillator count="1" :state="state" @update="updateState" />
	<Oscillator count="2" :state="state" @update="updateState" />
	<Oscillator count="3" :state="state" @update="updateState" />
</Module>
</template>

<style scoped>
</style>
