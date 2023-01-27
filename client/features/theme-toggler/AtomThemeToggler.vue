<script setup lang="ts">
import { AtomVCheckbox } from '~~/client/shared/ui/components';
import { setNewTheme, isDarkMode } from './useDark';

const isDarkTheme = ref(isDarkMode.value);

watch(isDarkTheme, (newIsDarkTheme) => {
	setNewTheme(newIsDarkTheme);
});
</script>

<template>
	<AtomVCheckbox v-model="isDarkTheme" />
</template>

<style lang="scss" scoped></style>
