<script setup lang="ts">
import AtomHomeHeaderAddBtn from './AtomHomeHeaderAddBtn.vue';
import AtomHomeHeaderTitle from './AtomHomeHeaderTitle.vue';
</script>

<template>
	<div class="home-header">
		<AtomHomeHeaderTitle />
		<AtomHomeHeaderAddBtn />
	</div>
</template>

<style lang="scss" scoped>
.home-header {
	@apply flex items-center justify-between px-20 w-full py-8;
	@apply bg-gradient-to-r light:from-white dark:from-zinc-800 light:to-zinc-100 dark:to-zinc-400;
}
</style>
