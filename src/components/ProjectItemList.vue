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
			return this.items.map((item, index) => ({ ...item, index }));
		}
	}
};
</script>

<template>
  <div>
    <ul>
      <RecycleScroller
        class="scroller"
        :items="items"
        :item-size="300"
        key-field="title"
      >
        <template #default="{ item }">
          <div class="item">
            <ProjectItem 
              :title="item.title"
              :description="item.description"
              :image="item.image"
              :link="item.link"
              :timeframe="item.timeframe"
              :alt="item.alt"
            />
          </div>
        </template>
      </RecycleScroller>
    </ul>
  </div>
</template>
