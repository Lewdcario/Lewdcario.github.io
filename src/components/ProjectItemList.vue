<script>
import ProjectItem from './ProjectItem.vue';
import data from '@/data/projects.json';

export default {
	components: {
		ProjectItem
	},
	data() {
		return {
			items: data
		};
	}
};
</script>

<template>
  <div>
    <ul>
      <RecycleScroller
        v-slot="{ item }"
        class="scroller"
        :items="items"
        :item-size="300"
        key-field="title"
      >
        <div class="item">
          <ProjectItem 
            :title="item.title"
            :description="item.description"
            :image="item.image"
            :link="item.link"
            :timeframe="item.timeframe"
          />
        </div>
      </RecycleScroller>
    </ul>
  </div>
</template>
