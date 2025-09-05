<script setup>
import { ref } from 'vue';

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	items: {
		type: Array,
		required: true,
	},
	value: {
		type: Number,
		default: 0,
	},
});
const emit = defineEmits(["update:modelValue"]);

function onInput(e) {
	emit("update:modelValue", e.target.value);
}

</script>

<template>
	<div id="container">
		<label id="label" class="form-select-label" for="options">
			{{ label }}
		</label>
		<select id="options" class="form-select" @change="onInput">
			<option v-for="(item, i) in items" :value="i">{{ item }}</option>
		</select>
	</div>
</template>

<style scoped>
#container {
	display: flex;
	flex-direction: column;
}

#label {
	padding-bottom: 1rem;
}

#options {
	margin-bottom: 2rem;
	width: 20rem;
}
</style>
