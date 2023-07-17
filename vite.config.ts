import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			vue: '@vue/compat',
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
		dedupe: ['vue']
	},
	plugins: [vue(), vueJsx()]
});
