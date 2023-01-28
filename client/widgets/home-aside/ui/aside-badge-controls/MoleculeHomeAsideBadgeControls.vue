<script setup lang="ts">
import { AtomVBadge } from '~~/client/shared/ui/components';
import { AtomThemeToggler } from '~~/client/features/theme-toggler';
const props = defineProps<{
	isHiddenAside: boolean;
}>();
</script>

<template>
	<AtomVBadge class="w-4/5">
		<span
			v-if="!isHiddenAside"
			class="i-carbon-sun transition-300 text-3xl 4xl:text-4xl text-antiMain"
		/>
		<AtomThemeToggler />
		<span
			v-if="!isHiddenAside"
			class="i-carbon-moon transition-300 text-3xl 4xl:text-4xl text-antiMain"
		/>
	</AtomVBadge>
</template>

<style lang="scss" scoped></style>
