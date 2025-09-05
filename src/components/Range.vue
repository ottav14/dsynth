<script setup>
defineProps({
	label: {
		type: String,
		require: true,
	},
	min: {
		type: Number,
		require: true,
	},
	max: {
		type: Number,
		require: true,
	},
	value: {
		type: Number,
		require: true,
	},
	step: {
		type: Number,
		default: 0.1,
	},
});
</script>

<template>
<div id="frequency1-range-container">
	<label id="label" for="range" class="form-label">
		{{ label }}
	</label>
	<input 
		type="range" 
		class="form-range" 
		id="range"
		:min="min"
		:max="max"
		:value="value"
		:step="step"
	>
</div>
</template>

<style scoped>
#range {
	padding-bottom: 2rem;
}

#label {
	padding-bottom: 1.5rem;
}
</style>
