<script setup lang='ts'>
import Sky from './components/Sky.vue';
</script>

<template>
	<Sky>
		<b-container
			fluid
			class='p-5'
		>
			<RouterView />
		</b-container>
	</Sky>
</template>
