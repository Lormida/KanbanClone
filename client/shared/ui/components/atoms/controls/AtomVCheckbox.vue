<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

const props = defineProps<{
	modelValue: boolean;
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
}>();

const enabled = ref(props.modelValue);

watch(enabled, (newEnabled) => {
	emit('update:modelValue', newEnabled);
});
</script>

<template>
	<Switch
		v-model="enabled"
		:class="enabled ? 'bg-white' : 'bg-black'"
		class="relative scale-120 inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
	>
		<span
			aria-hidden="true"
			:class="enabled ? 'translate-x-35px' : 'translate-x-5px'"
			class="pointer-events-none inline-block h-[34px] w-[34px] light:bg-white dark:bg-black transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
		/>
	</Switch>
</template>

<style lang="scss" scoped></style>
