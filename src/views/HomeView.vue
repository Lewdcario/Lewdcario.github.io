<script setup lang="ts">
import Bio from '../components/Bio.vue';
import ProjectItemList from '../components/ProjectItemList.vue';
</script>

<template>
	<div class="mx-auto text-center content-center">
		<b-row class="mb-5">
			<b-col>
				<Bio />
			</b-col>
		</b-row>
		<b-row class="mb-5">
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
	</div>
</template>
