<script lang='ts'>
import { defineComponent, ref } from 'vue';

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

export default defineComponent({
	props: {
		text: {
			type: String,
			required: true
		}
	},
	setup() {
		return {
			hidden,
			warningVisible,
			startHover,
			resetHover
		};
	}
});
</script>

<template>
	<div class='jumpscare-warning'>
		<textarea
			@mouseover='startHover'
			@mouseleave='resetHover'
			readonly
			rows='1'
			cols='7'
			:value='$props.text'
		/>
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
}

.jumpscare-warning textarea {
	font-size: 4rem;
	resize: none;
}

.warning-text {
	position: absolute;
	top: -1.5rem;
	left: 50%;
	transform: translateX(-50%);
	margin-top: -1rem;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.text-wrapper:hover .warning-text {
	opacity: 1;
}
</style>
