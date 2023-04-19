<template>
	<div>
		<ul>
			<li
				v-for="item in items"
				:key="item.title"
				class="item"
			>
				<ProjectItem
					:title="item.title || ''"
					:description="item.description || ''"
					:image="item.image || ''"
					:link="item.link || ''"
					:timeframe="item.timeframe ||''"
					:alt="item.alt ||''"
				/>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectItem from '../ProjectItem.vue';
import items from '../../data/projects'
import type { ProjectItemType } from '../../declarations/index';

export default defineComponent({
	components: {
		ProjectItem
	},
	props: {
		items: {
			type: Array as () => ProjectItemType[],
			required: false,
			default: () => items
		}
	}
});
</script>
