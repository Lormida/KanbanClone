<script setup lang="ts">
import MoleculeHomeAsideHeader from './aside-header/MoleculeHomeAsideHeader.vue';
import MoleculeHomeAsideBoards from './aside-boards/MoleculeHomeAsideBoards.vue';
import MoleculeHomeAsideBadgeControls from './aside-badge-controls/MoleculeHomeAsideBadgeControls.vue';
</script>

<template>
	<div class="home-aside">
		<MoleculeHomeAsideHeader> kanban </MoleculeHomeAsideHeader>
		<MoleculeHomeAsideBoards />

		<ClientOnly>
			<MoleculeHomeAsideBadgeControls class="self-center mt-a" />
		</ClientOnly>
	</div>
</template>

<style lang="scss" scoped>
.home-aside {
	@apply flex flex-col items-start w-full gap-y-15 h-full pt-10 pb-10 bg-aside;
}
</style>
