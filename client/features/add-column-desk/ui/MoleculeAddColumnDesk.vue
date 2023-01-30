<script setup lang="ts"></script>

<template>
	<div class="w-full flex flex-col items-center justify-start gap-y-6">
		<div class="py-3">
			<h2 class="invisible text-xl py-2">fake text</h2>
		</div>

		<div class="add-column-desk w-full center rounded-xl">
			<span
				class="text-2xl dark:text-slate-300 light:text-slate-900 font-medium"
				>+ New Column</span
			>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.add-column-desk {
	height: 70vh;
	@apply dark:bg-black/80 light:bg-slate-100/80;
}
</style>
