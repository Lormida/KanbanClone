<script setup lang="ts">
import { AtomVIndicator } from '~~/client/shared/ui/components';
import AtomColumnDeskCard from './AtomColumnDeskCard.vue';
</script>

<template>
	<div class="w-full flex flex-col items-center justify-start gap-y-6">
		<div class="flex w-full items-center justify-start gap-x-3 py-3">
			<AtomVIndicator />
			<h2
				class="uppercase text-xl text-left bg-dark-500/60 shadow text-white px-6 py-2 rounded-xl"
			>
				todo (4)
			</h2>
		</div>

		<AtomColumnDeskCard
			v-for="card in 4"
			:key="card"
			subtitle="Build UI for onboarding flow"
			text="0 of 3 subtasks"
		></AtomColumnDeskCard>
	</div>
</template>

<style lang="scss" scoped></style>
