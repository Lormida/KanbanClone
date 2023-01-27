<script setup lang="ts">
import { isDarkMode } from '~~/client/features/theme-toggler';
import { AtomVBadge } from '~~/client/shared/ui/components';
import { AtomThemeToggler } from '~~/client/features/theme-toggler';
</script>

<template>
	<AtomVBadge class="w-4/5 h-30">
		<span
			class="i-carbon-sun transition-300 text-4xl text-antiMain"
			:class="{ 'text-5xl': !isDarkMode }"
		/>
		<AtomThemeToggler />
		<span
			class="i-carbon-moon transition-300 text-4xl text-antiMain"
			:class="{ 'text-5xl': isDarkMode }"
		/>
	</AtomVBadge>
</template>

<style lang="scss" scoped></style>
