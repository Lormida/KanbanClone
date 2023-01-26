<script setup lang="ts"></script>

<template>
	<div class="flex items-end justify-between h-13 w-15">
		<span v-for="stripe in 3" :key="stripe" class="stripe" />
	</div>
</template>

<style lang="scss" scoped>
.stripe {
	@apply w-[25%] h-13 h-full rounded-xl;
}
.stripe:nth-child(1) {
	@apply bg-blue-600/75 h-full opacity-90;
}
.stripe:nth-child(2) {
	@apply bg-blue-400/75 h-9/10 opacity-60;
}
.stripe:nth-child(3) {
	@apply bg-blue-200/75 h-4/5 opacity-70;
}
</style>
