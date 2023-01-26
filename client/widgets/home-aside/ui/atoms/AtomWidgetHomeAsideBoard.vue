<script setup lang="ts"></script>

<template>
	<div
		class="flex items-center w-full justify-start gap-x-6 px-3 rounded-xl cursor-pointer py-6 hover:bg-purple-800 transition-300"
	>
		<div
			class="i-ic-outline-space-dashboard text-3xl h-10 bg-10 text-mainAccent"
		/>
		<p class="text-4xl text-mainAccent">
			<slot />
		</p>
	</div>
</template>

<style lang="scss" scoped></style>
