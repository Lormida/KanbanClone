<script setup lang="ts">
import AtomHomeAsideHeaderIcon from './AtomHomeAsideHeaderIcon.vue';
import { AtomVBigtitle } from '~~/client/shared/ui/components';
</script>

<template>
	<div class="home-aside-header">
		<AtomHomeAsideHeaderIcon />

		<AtomVBigtitle>
			<slot />
		</AtomVBigtitle>
	</div>
</template>

<style lang="scss" scoped>
.home-aside-header {
	@apply flex items-center justify-center gap-x-[5%] w-full py-10;
}
</style>
