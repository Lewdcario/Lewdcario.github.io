<script lang='ts'>
import { defineComponent, computed } from 'vue';
import twitchLogo from '../assets/twitch.svg';
import youtubeLogo from '../assets/youtube.svg';
import twitterLogo from '../assets/twitter.svg';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';

export default defineComponent({
	props: {
		social: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		}
	},
	setup(props: { social: string }) {
		const logo = computed(() => {
			switch (props.social.toLowerCase()) {
			case 'twitch':
				return twitchLogo;
			case 'youtube':
				return youtubeLogo;
			case 'twitter':
				return twitterLogo;
			case 'github':
				return githubLogo;
			case 'linkedin':
				return linkedinLogo;
			default:
				return '';
			}
		});

		return { logo };
	}
});
</script>

<template>
	<span class='d-inline-block'>
		<b-img :src='logo' width='30' class='img-responsive mx-4' />
		<h5 class='animated-link half-highlight'>
			<a :href='link' target='_blank' rel='noreferrer' >
				{{ title }}
			</a>
		</h5>
	</span>
</template>
