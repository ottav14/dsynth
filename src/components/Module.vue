<template>
	<div class="module">
		<h2 class="label">{{ label }}</h2>
		<slot></slot>
	</div>
</template>

<script setup>
defineProps({
	label: {
		type: String,
		default: "Module",
	},
});
</script>

<style scoped>
.module {
	background-color: #000;
	color: #fff;
	padding: 4rem;
	border-radius: 8px;
	margin: 2rem;
	width: fit-content;
}

.label {
	padding-bottom: 1rem;
}
</style>

