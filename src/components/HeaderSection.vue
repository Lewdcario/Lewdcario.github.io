<script lang="ts">
import { defineComponent } from 'vue';
import SocialIcon from './SocialIcon.vue';
import JumpscareWarning from './JumpscareWarning.vue';

export default defineComponent({
	components: {
		SocialIcon,
		JumpscareWarning
	}
});
</script>

<template>
	<div>
		<b-avatar class='border' src='/icon.webp' alt='Avatar' size='10rem' />
		<JumpscareWarning text='Okami.'>
			<template #revealed>
				<p>She/Her</p>
			</template>
		</JumpscareWarning>
		<p>
			Hi, I'm known by my online alias Okami. I am a full-stack software
			engineer.
		</p>
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
