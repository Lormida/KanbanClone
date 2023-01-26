<script setup lang="ts">
import { AtomVSubtitle } from '~~/client/shared/ui/components';
import AtomHomeAsideBoard from './AtomHomeAsideBoard.vue';

const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
</script>

<template>
	<div class="aside-boards">
		<AtomVSubtitle class="self-start pl-8 uppercase">
			all boards (8)</AtomVSubtitle
		>
		<div class="flex w-9/10 flex-col gap-y-5">
			<AtomHomeAsideBoard v-for="board in boards" :key="board">
				{{ board }}
			</AtomHomeAsideBoard>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.aside-boards {
	@apply flex w-full flex-col gap-y-5 items-center;
}
</style>
