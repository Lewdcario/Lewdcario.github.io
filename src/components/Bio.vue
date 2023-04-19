<script setup lang="ts">
import AvatarIcon from '../components/AvatarIcon.vue';
import SocialIcon from '../components/SocialIcon.vue';
</script>

<template>
	<div>
		<AvatarIcon />
		<h1 class='mt-3'>
			Okami.
		</h1>
		<p>Hi, I'm known by my online alias Okami. I am a full-stack software engineer.</p>
		<p>
			<SocialIcon
				social='twitter'
				title='Twitter'
				link='https://twitter.com/okamicario'
			/>
			<SocialIcon
				social='github'
				title='Github'
				link='https://github.com/Lewdcario'
			/>
		</p>
	</div>
</template>
