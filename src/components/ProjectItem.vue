<script lang='ts'>
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
	} as any
});
</script>

<template>
	<b-card
		img-top
		style='max-width: 20rem;'
		class='mb-2 bg-transparent mx-auto border-0'
	>
		<a
			ref='noreferrer'
			:href='link'
			target='_blank'
		>
			<b-card-img
				:alt='title'
				:src='image'
			/>
		</a>
		<b-card-title>
			<h3 class='animated-link'>
				{{ title }}
			</h3>
		</b-card-title>
		<b-card-text>
			<p>
				<small>
					{{ timeframe }}
				</small>
			</p>
			<h5>
				{{ description }}
			</h5>
		</b-card-text>
	</b-card>
</template>
