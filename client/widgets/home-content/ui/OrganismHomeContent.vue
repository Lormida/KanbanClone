<script setup lang="ts">
import { MoleculeColumnDesk } from '~~/client/features/column-desk';
import { MoleculeAddColumnDesk } from '~~/client/features/add-column-desk';
import { useBoardsStore } from '../store/boards';
const currentBoardName = 'Platform Launch';

const storeBoards = useBoardsStore();
const currentBoard = storeBoards.getBoardByName(currentBoardName);
</script>

<template>
	<div class="home-content h-full w-full flex-inline gap-x-[3%] px-15 py-10">
		<MoleculeColumnDesk
			v-for="desk in currentBoard.desks"
			:key="desk.id"
			v-bind="desk"
			class="max-w-1/6"
		/>
		<MoleculeAddColumnDesk class="max-w-1/6"></MoleculeAddColumnDesk>
	</div>
</template>

<style lang="scss" scoped>
.home-content {
	background: url('/images/bg-home2.avif');
	background-position: center;
	background-size: cover;
	filter: grayscale(50%);
}
</style>
