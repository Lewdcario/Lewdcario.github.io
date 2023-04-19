<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		timeframe: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		}
	}
});
</script>

<template>
	<b-card
		:img-src='image'
		:img-alt='title'
		img-top
		style='max-width: 20rem;'
		class='mb-2 bg-transparent mx-auto'
	>
		<b-card-title>
			<h3 class='animated-link'>
				<a
					ref='noreferrer'
					:href='link'
					target='_blank'
				>
					{{ title }}
				</a>
			</h3>
		</b-card-title>
		<b-card-text>
			<h5>
				{{ description }}
			</h5>
			<p>
				<small>
					{{ timeframe }}
				</small>
			</p>
		</b-card-text>
	</b-card>
</template>