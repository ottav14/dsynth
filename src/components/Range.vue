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
