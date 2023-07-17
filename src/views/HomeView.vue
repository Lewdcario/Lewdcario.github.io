<script setup lang="ts">
import { useHeadSafe } from 'unhead';
import HeaderSection from '../components/HeaderSection.vue';
import FooterSection from '../components/FooterSection.vue';
import ProjectItemList from '../components/ProjectItemList.vue';

useHeadSafe({
	htmlAttrs: {
		lang: 'en'
	},
	meta: [
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{
			name: 'og:image',
			content: '/banner.webp'
		},
		{
			name: 'twitter:image',
			content: '/banner.webp'
		}
	],
	title: 'Okami\'s Portfolio'
});
</script>

<template>
	<div class='mx-auto text-center content-center'>
		<b-row class='mb-5'>
			<b-col>
				<HeaderSection />
			</b-col>
		</b-row>
		<b-row class='mb-5'>
			<b-col>
				<h1>
					Projects
				</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<ProjectItemList />
			</b-col>
		</b-row>
		<b-row class='mb-5'>
			<b-col>
				<FooterSection />
			</b-col>
		</b-row>
	</div>
</template>
