<script setup>
defineProps({
	label: {
		type: String,
		require: true,
	},
});
</script>

<template>
<div id="container">
	<label class="form-check-label" for="mute">
		{{ label }}
	</label>
	<input 
		class="form-check-input" 
		type="checkbox" 
		id="mute"
		checked
	>
</div>
</template>

<style scoped>
#container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
