<script setup lang="ts">
import MoleculeWidgetHomeAsideHeader from './molecules/MoleculeWidgetHomeAsideHeader.vue';
import MoleculeWidgetHomeAsideBoards from './molecules/MoleculeWidgetHomeAsideBoards.vue';
</script>

<template>
	<div class="home-aside">
		<MoleculeWidgetHomeAsideHeader> kanban </MoleculeWidgetHomeAsideHeader>
		<MoleculeWidgetHomeAsideBoards />
	</div>
</template>

<style lang="scss" scoped>
.home-aside {
	@apply flex flex-col items-start w-full gap-y-15 h-full py-10 bg-zinc-800;
}
</style>
