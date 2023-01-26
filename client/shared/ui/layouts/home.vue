<script lang="ts" setup>
import { OrganismWidgetHomeAside } from '~/widgets/home-aside';
import { OrganismWidgetHomeHeader } from '~/widgets/home-header';
</script>

<template>
	<main class="home">
		<OrganismWidgetHomeAside class="home__aside" />
		<div class="home__content">
			<OrganismWidgetHomeHeader class="home__header" />
			<slot />
		</div>
	</main>
</template>

<style lang="scss" scoped>
.home {
	@apply flex min-h-screen h-full;
	// .home__aside

	&__aside {
		@apply max-w-1/5;
	}

	// .home__content

	&__content {
		@apply flex flex-col h-full w-4/5;
	}

	// .home__header

	&__header {
		@apply max-h-20;
	}
}
</style>
