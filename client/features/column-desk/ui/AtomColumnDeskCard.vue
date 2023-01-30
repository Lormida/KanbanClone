<script setup lang="ts">
import { AtomVSubtitle, AtomVText } from '~~/client/shared/ui/components';

interface ICard {
	subtitle: string;
	text: string;
}

const props = defineProps<ICard>();
</script>

<template>
	<div
		class="flex w-full flex-col items-left justify-center px-3 py-4 rounded-xl gap-y-3 shadow light:bg-zinc-100/60 border-2 border-white/80 dark:bg-dark-900/90"
	>
		<AtomVSubtitle> {{ props.subtitle }}</AtomVSubtitle>
		<AtomVText>{{ props.text }}</AtomVText>
	</div>
</template>

<style lang="scss" scoped></style>
