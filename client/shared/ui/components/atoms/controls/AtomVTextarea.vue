<script setup lang="ts">
const props = defineProps<{
	placeholder: string;
}>();
</script>

<template>
	<div class="w-full">
		<textarea
			:placeholder="props.placeholder"
			type="text"
			class="rounded-xl w-full text-2xl bg-slate-800 p-4 focus:none"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
