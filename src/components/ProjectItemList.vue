<script lang="ts">
import { RecycleScroller } from 'vue-virtual-scroller';
import ProjectItem from './ProjectItem.vue';
import items from '../data/projects';
import type { ProjectItemType } from '../declarations/index';

export default {
	components: {
		ProjectItem,
		RecycleScroller
	},
	props: {
		items: {
			type: Array as () => ProjectItemType[],
			required: false,
			default: () => items
		}
	},
	computed: {
		itemsWithIndex() {
			return this.items.map((item, index) => ({
				...item,
				index,
				visible: false
			}));
		}
	}
};

const center = window.innerHeight / 2;
const list = Array.from(document.querySelectorAll('.item')) as HTMLElement[];

function updateZoom() {
	list.forEach((item: HTMLElement) => {
		const rect = item.getBoundingClientRect();
		const isCenter = rect.top < center && rect.bottom > center;
		if (isCenter) {
			item.classList.add('zoom');
			item.style.boxShadow = '0px 0px 20px 5px rgba(255, 255, 255, 0.5)';
		}
		else {
			item.classList.remove('zoom');
			item.style.boxShadow = '';
		}
	});
}

window.addEventListener('scroll', updateZoom);
</script>

<template>
	<div>
		<ul>
			<RecycleScroller
				class='scroller'
				:items='items'
				:item-size='350'
				key-field='title'
			>
				<template #default='{ item }'>
					<div
						:key='item.title'
						:class='`item ${item.visible ? &apos;focus&apos; : &apos;&apos;}`'
					>
						<ProjectItem
							:title='item.title'
							:description='item.description'
							:image='item.image'
							:link='item.link'
							:timeframe='item.timeframe'
							:alt='item.alt'
						/>
					</div>
				</template>
			</RecycleScroller>
		</ul>
	</div>
</template>

<style scoped>
.item {
	transition: all 0.2s;
	transform: scale(1);
}

.item:hover {
	transform: scale(1.1);
}
</style>
