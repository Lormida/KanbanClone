<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		colorSchema: 'primary';
	}>(),
	{
		colorSchema: 'primary',
	}
);

const mapProperty = {
	primary: `
	dark:(text-emerald-200 bg-emerald-900)
	light:(text-emerald-200 bg-emerald-900)
	`,
};

const typeClasses = computed(() => mapProperty[props.colorSchema]);
</script>

<template>
	<button class="base-btn" :class="[typeClasses]">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.base-btn {
	@apply px-10 font-medium py-4 text-xl 4xl:text-2xl transition-300 rounded-xl;
	@apply hover:(scale-98 opacity-75);
}
</style>
