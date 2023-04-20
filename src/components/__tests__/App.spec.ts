// import items from '../../data/projects';

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TheBio from '../Bio.vue';

describe('The Welcome', () => {
	it('Mounts properly', async () => {
		const wrapper = mount(TheBio);
    
		expect(wrapper.text()).toContain('Projects');
	});
});
  