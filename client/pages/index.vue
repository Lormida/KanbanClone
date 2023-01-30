<script setup lang="ts">
import { OrganismHomeContent } from '../widgets/home-content';

definePageMeta({
	layout: 'home',
});
</script>

<template>
	<div class="home-content">
		<OrganismHomeContent />
	</div>
</template>

<style lang="scss" scoped>
.home-content {
	@apply bg-zinc-400;
}
</style>
