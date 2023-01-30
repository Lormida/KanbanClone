<script setup lang="ts"></script>

<template>
	<div class="flex items-end justify-between h-13 w-15">
		<span
			v-for="stripe in 3"
			:key="stripe"
			class="stripe w-[25%] h-13 h-full rounded-xl"
		/>
	</div>
</template>

<style lang="css" scoped>
.stripe {
}
.stripe:nth-child(1) {
	height: 100%;
	@apply bg-blue-600/75 opacity-90;
}
.stripe:nth-child(2) {
	height: 90%;
	@apply bg-blue-400/75 opacity-60;
}
.stripe:nth-child(3) {
	height: 80%;
	@apply bg-blue-200/75 opacity-70;
}
</style>
