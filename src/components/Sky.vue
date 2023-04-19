<script lang='ts'>
import { defineComponent } from 'vue';

function drawCanvas() {
	const c = document.getElementsByClassName('sky')[0] as any;
	const ctx = c.getContext('2d');
	const xMax = window.innerWidth;
	const yMax = window.innerHeight;
	c.width = xMax;
	c.height = yMax;
	const hmTimes = Math.round(xMax + yMax);

	for (let i = 0; i <= hmTimes; i++) {
		const randomX = Math.floor((Math.random() * xMax) + 1);
		const randomY = Math.floor((Math.random() * yMax) + 1);
		const randomSize = Math.floor((Math.random() * 2) + 1);
		const randomOpacityOne = Math.floor((Math.random() * 9) + 1);
		const randomOpacityTwo = Math.floor((Math.random() * 9) + 1);
		const randomHue = Math.floor((Math.random() * 360) + 1);
		if (randomSize > 1) {
			ctx.shadowBlur = Math.floor((Math.random() * 15) + 5);
			ctx.shadowColor = 'white';
		}
		ctx.fillStyle = 'hsla(' + randomHue + ', 30%, 80%, .' + randomOpacityOne + randomOpacityTwo + ')';
		ctx.fillRect(randomX, randomY, randomSize, randomSize);
	}

	// Move the canvas along with the scroll
	c.style.top = `${window.pageYOffset}px`;
}

export default defineComponent({
	mounted() {
		window.addEventListener('load', () => {
			setInterval(() => {
				drawCanvas();
			}, Math.random() * 1000);
		});
		window.addEventListener('resize', drawCanvas);
		window.addEventListener('scroll', drawCanvas);
	},
	beforeUnmount() {
		window.removeEventListener('resize', drawCanvas);
		window.removeEventListener('scroll', drawCanvas);
	},
});
</script>

<style scoped>
.sky {
	background: -webkit-linear-gradient(#00111e 30%, #033d5e);
	background: -moz-linear-gradient(#00111e 30%, #033d5e);
	background: -o-linear-gradient(#00111e 30%, #033d5e);
	background: linear-gradient(#00111e 30%, #033d5e);
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
</style>

<template>
	<canvas class='sky' />
	<slot />
</template>
