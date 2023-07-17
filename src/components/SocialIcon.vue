<script lang='ts'>
import { defineComponent } from 'vue';
import twitchLogo from './icons/TwitchIcon.vue';
import twitterLogo from './icons/TwitterIcon.vue';
import facebookLogo from './icons/FacebookIcon.vue';
import youtubeLogo from './icons/YoutubeIcon.vue';
import githubLogo from './icons/GithubIcon.vue';
import linkedinLogo from './icons/LinkedInIcon.vue';

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
		const logo: any = {
			twitch: twitchLogo,
			twitter: twitterLogo,
			facebook: facebookLogo,
			youtube: youtubeLogo,
			github: githubLogo,
			linkedin: linkedinLogo
		};
		return { logo: logo[props.social.toLowerCase()] };
	}
});
</script>

<template>
	<span class='d-inline-block'>
		<a
			:href='link'
			target='_blank'
			rel='noreferrer'
			class='m-5'
		>
			<component
				:is='logo'
				class='img-responsive text-light'
			/>
		</a>
		<h4 class='animated-link half-highlight mt-2'>
			{{ title }}
		</h4>
	</span>
</template>
