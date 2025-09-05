<script setup>
import Module from './components/Module.vue';
import Dropdown from './components/Dropdown.vue';
import Range from './components/Range.vue';
import Checkbox from './components/Checkbox.vue';
import AmpModule from './components/AmpModule.vue';
import OscillatorModule from './components/OscillatorModule.vue';
import FilterModule from './components/FilterModule.vue';
</script>

<template>
<main>
	<div id="ui">
		<OscillatorModule />
		<FilterModule />
		<AmpModule />
	</div>
</main>
</template>

<style scoped>
main {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

#ui {
	display: flex;
}
</style>
