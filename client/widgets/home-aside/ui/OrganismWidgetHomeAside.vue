<script setup lang="ts">
import MoleculeWidgetHomeAsideHeader from './molecules/MoleculeWidgetHomeAsideHeader.vue';
</script>

<template>
	<div class="home-aside">
		<MoleculeWidgetHomeAsideHeader> kanban </MoleculeWidgetHomeAsideHeader>
	</div>
</template>

<style lang="scss" scoped>
.home-aside {
	@apply flex flex-col items-start w-full h-full bg-zinc-500;
}
</style>
