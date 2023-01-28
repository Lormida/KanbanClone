<script setup lang="ts">
import { MoleculeColumnDesk } from '~~/client/features/column-desk';
</script>

<template>
	<div class="home-content h-full w-full flex-inline gap-x-[5%] px-15 py-10">
		<MoleculeColumnDesk v-for="col in 3" :key="col" class="max-w-1/5" />
	</div>
</template>

<style lang="scss" scoped>
.home-content {
	background: url('/images/bg-home2.avif');
	background-position: center;
	background-size: cover;
	// filter: grayscale(90%);
}
</style>
