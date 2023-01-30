<script setup lang="ts">
import { AtomVIndicator } from '~~/client/shared/ui/components';
import AtomColumnDeskCard from './AtomColumnDeskCard.vue';
import AtomAddNewColumnDeskCard from './AtomAddNewColumnDeskCard.vue';

interface ICard {
	subtitle: string;
	text: string;
}

interface IDesk {
	id: string;
	deskName: string;
	cards: ICard[];
}

const props = defineProps<IDesk>();
</script>

<template>
	<div class="w-full flex flex-col items-center justify-start gap-y-3">
		<div class="flex w-full items-center justify-start gap-x-3 py-3 mb-4">
			<AtomVIndicator />
			<h2
				class="uppercase text-xl text-left bg-dark-500/60 shadow text-white px-6 py-2 rounded-xl"
			>
				{{ props.deskName }} ({{ props.cards?.length }})
			</h2>
		</div>

		<AtomColumnDeskCard
			v-for="(card, idx) in props.cards"
			:key="`${card.text}${idx}`"
			:subtitle="card.subtitle"
			:text="card.text"
		/>
		<AtomAddNewColumnDeskCard />
	</div>
</template>

<style lang="scss" scoped></style>
