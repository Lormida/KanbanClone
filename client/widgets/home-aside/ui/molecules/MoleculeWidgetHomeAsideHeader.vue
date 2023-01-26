<script setup lang="ts">
import AtomWidgetHomeAsideHeaderIcon from '../atoms/AtomWidgetHomeAsideHeaderIcon.vue';
import AtomVBigTitle from '~~/client/shared/ui/components/atoms/title/AtomVBigTitle.vue';
</script>

<template>
	<div class="home-aside-header">
		<AtomWidgetHomeAsideHeaderIcon />

		<AtomVBigTitle>
			<slot />
		</AtomVBigTitle>
	</div>
</template>

<style lang="scss" scoped>
.home-aside-header {
	@apply flex items-center justify-center gap-x-[5%] w-full py-10;
}
</style>
