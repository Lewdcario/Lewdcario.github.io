<script setup lang="ts">
import { useHeadSafe } from 'unhead';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ProjectItemList from '../components/ProjectItemList.vue';

useHeadSafe({
	htmlAttrs: {
		lang: 'en'
	},
	meta: [
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
	],
	title: 'Okami\'s Portfolio'
});
</script>

<template>
	<div class='mx-auto text-center content-center'>
		<b-row class='mb-5'>
			<b-col>
				<Header />
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
				<Footer />
			</b-col>
		</b-row>
	</div>
</template>
