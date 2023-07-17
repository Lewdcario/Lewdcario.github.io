<script setup lang='ts'>
import SocialIcon from './SocialIcon.vue';
import JumpscareWarning from './JumpscareWarning.vue';
</script>

<template>
	<div>
		<b-avatar
			class='border'
			src='https://media.licdn.com/dms/image/C4E03AQF1h9I4IYH6eA/profile-displayphoto-shrink_400_400/0/1626732947998?e=1687392000&v=beta&t=A54QEa9n8jxDBW3iK0E0OmPIVBJV6--sRbE7ywGhEmA&'
			alt='Avatar'
			size='10rem'
		/>
		<JumpscareWarning text='Okami.'>
			<template #revealed>
				<p>She/Her</p>
			</template>
		</JumpscareWarning>
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
