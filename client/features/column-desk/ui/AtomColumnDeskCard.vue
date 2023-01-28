<script setup lang="ts">
import { AtomVSubtitle, AtomVText } from '~~/client/shared/ui/components';

const props = defineProps<{
	subtitle: string;
	text: string;
}>();
</script>

<template>
	<div
		class="flex w-full flex-col items-left justify-center px-3 py-4 rounded-xl gap-y-3 shadow light:bg-zinc-100/60 dark:bg-dark-900/90"
	>
		<AtomVSubtitle> {{ props.subtitle }}</AtomVSubtitle>
		<AtomVText>{{ props.text }}</AtomVText>
	</div>
</template>

<style lang="scss" scoped></style>
