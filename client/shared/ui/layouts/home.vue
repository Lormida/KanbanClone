<script lang="ts" setup>
import { OrganismWidgetHomeAside } from '~/widgets/home-aside';
import { MoleculeWidgetHomeHeader } from '~/widgets/home-header';
</script>

<template>
	<main class="home">
		<OrganismWidgetHomeAside class="home__aside" />
		<div
			class="home__content-wrapper h-full flex max-h-screen overflow-y-scroll flex-col h-full w-full"
		>
			<MoleculeWidgetHomeHeader class="home__header" />
			<slot />
		</div>
	</main>
</template>

<style lang="scss" scoped>
.home {
	display: flex;
	height: 100%;
	// .home__aside

	&__aside {
	}

	// .home__content

	&__content-wrapper {
		// @apply flex flex-col h-full w-full;
	}

	// .home__header

	&__header {
		@apply border-l-neutral border-l-2;
	}
}
</style>
