<script setup lang="ts">
import SkyCanvas from './components/SkyCanvas.vue';
</script>

<template>
	<SkyCanvas>
		<b-container fluid class='p-5'>
			<RouterView />
		</b-container>
	</SkyCanvas>
</template>
