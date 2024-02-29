declare module '*.vue';

// https://stackoverflow.com/questions/53937634/importing-a-svg-module-raises-typescript-error-cannot-find-module
declare module '*.svg' {
	import Vue, { VueConstructor } from '@vue/compat';
	const content: VueConstructor<Vue>;
	export default content;
}
