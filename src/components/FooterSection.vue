<template>
	<footer>
		<p>&copy; Okami {{ currentDate }}</p>
	</footer>
</template>

<script lang="ts">
export default {
	data() {
		return {
			currentDate: new Date().getFullYear()
		};
	}
};
</script>
