import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import TestProjectItemList from './TestProjectItemList.vue';

import items from '../../data/projects';

describe('App', () => {
	it('renders properly', () => {
		const wrapper = mount(TestProjectItemList, { props: { items } });
		expect(wrapper.text()).toContain('Progressive');
	});
});
