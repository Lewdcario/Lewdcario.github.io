<script setup lang='ts'>
import { ref } from 'vue';

const hidden = ref(true);
const warningVisible = ref(false);
const hoverEnabled = ref(true);

const startHover = () => {
	if (!hoverEnabled.value) return;
	warningVisible.value = true;
	setTimeout(() => {
		if (warningVisible.value) {
			hidden.value = false;
			warningVisible.value = false;
			hoverEnabled.value = false;
		}
	}, 2000);
};

const resetHover = () => {
	if (!hoverEnabled.value) return;
	warningVisible.value = false;
	hidden.value = true;
};
</script>

<template>
	<div
		class='jumpscare-warning'
		@mouseover='startHover'
		@mouseleave='resetHover'
	>
		<slot name='trigger' />
		<slot
			v-if='!hidden'
			name='revealed'
		/>
		<b-alert
			v-show='warningVisible'
			class='warning-text opacity-75'
			variant='danger'
			show
			:dismissible='false'
		>
			Pronoun Jumpscare Warning!
		</b-alert>
	</div>
</template>

<style scoped>
.jumpscare-warning {
	position: relative;
	display: block;
}

.warning-text {
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	opacity: 0;
	transition: opacity 0.3s ease;
}

.jumpscare-warning:hover .warning-text {
	opacity: 1;
}
</style>
