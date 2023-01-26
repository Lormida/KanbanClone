<script setup lang="ts">
import MoleculeHomeAsideHeader from './aside-header/MoleculeHomeAsideHeader.vue';
import MoleculeHomeAsideBoards from './aside-boards/MoleculeHomeAsideBoards.vue';
</script>

<template>
	<div class="home-aside">
		<MoleculeHomeAsideHeader> kanban </MoleculeHomeAsideHeader>
		<MoleculeHomeAsideBoards />
	</div>
</template>

<style lang="scss" scoped>
.home-aside {
	@apply flex flex-col items-start w-full gap-y-15 h-full py-10 bg-zinc-800;
}
</style>
