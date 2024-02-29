<template>
	<div>
		<canvas ref='canvas' />
		<slot />
	</div>
</template>

<script lang="ts">
export default {
	mounted() {
		const canvas = this.$refs.canvas as any;
		const context = canvas.getContext('2d');
		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);
		const stars: any[] = [];
		const maxStars = 100;

		function random(min: number, max: number) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		for (let i = 0; i < maxStars; i++) {
			stars.push({
				x: Math.random() * width,
				y: Math.random() * height,
				radius: Math.random() * 2 + 1,
				vx: random(-1, 1) / 2,
				vy: random(1, 10) / 10,
				glow: `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},${Math.random()})`
			});
		}

		function drawStars() {
			context.clearRect(0, 0, width, height);
			context.fillStyle = 'rgba(0, 0, 0, 0.8)';
			context.fillRect(0, 0, width, height);
			context.save();
			context.fillStyle = '#fff';
			for (let i = 0; i < maxStars; i++) {
				const star = stars[i];
				context.beginPath();
				context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				context.shadowColor = star.glow;
				context.shadowBlur = 10;
				context.fill();
			}
			context.restore();
		}

		function updateStars() {
			for (let i = 0; i < maxStars; i++) {
				const star = stars[i];
				star.x += star.vx;
				star.y += star.vy;
				if (star.y > height) {
					star.y = 0;
					star.x = Math.random() * width;
				}
			}
		}

		function loop() {
			drawStars();
			updateStars();
			requestAnimationFrame(loop);
		}

		window.addEventListener('resize', function () {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		});

		loop();
	}
};
</script>

<style scoped>
canvas {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
}
</style>
