<script setup>
useHead({
	title: 'Vitesse Nuxt 2',
	link: [
		{
			rel: 'icon',
			type: 'image/png',
			href: '/nuxt.png',
		},
	],
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
	min-height: 100vh;
	height: 100%;
	margin: 0;
	padding: 0;
}

html.dark {
	background: #222;
	color: white;
}
</style>
