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
	@apply flex items-center justify-between px-20 w-full py-8 bg-aside;
}
</style>
