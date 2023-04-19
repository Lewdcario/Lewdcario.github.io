<template>
	<div>
		<ul>
			<RecycleScroller class="scroller" :items="items" :item-size="300" key-field="title"
				@item-visible="onItemVisible">
				<template #default="{ item }">
					<div :class="`item ${item.visible ? 'focus' : ''}`">
						<ProjectItem :title="item.title" :description="item.description" :image="item.image"
							:link="item.link" :timeframe="item.timeframe" :alt="item.alt" />
					</div>
				</template>
			</RecycleScroller>
		</ul>
	</div>
</template>

<script lang="ts">
import { RecycleScroller } from "vue-virtual-scroller";
import ProjectItem from "./ProjectItem.vue";
import items from "../data/projects";
import type { ProjectItemType } from "../declarations/index";

export default {
	components: {
		ProjectItem,
		RecycleScroller,
	},
	props: {
		items: {
			type: Array as () => ProjectItemType[],
			required: false,
			default: () => items,
		},
	},
	computed: {
		itemsWithIndex() {
			return this.items.map((item, index) => ({ ...item, index, visible: false }));
		},
	}
};

const list = document.querySelectorAll('.item');
const center = window.innerHeight / 2;

function updateZoom() {
	list.forEach(item => {
		const rect = item.getBoundingClientRect();
		const isCenter = rect.top < center && rect.bottom > center;
		if (isCenter) {
			item.classList.add('zoom');
		} else {
			item.classList.remove('zoom');
		}
	});
}

window.addEventListener('scroll', updateZoom);
</script>

<style scoped>
.item {
  transition: all 0.2s;
  transform: scale(1);
}

.item:hover {
  transform: scale(1.1);
}
</style>
