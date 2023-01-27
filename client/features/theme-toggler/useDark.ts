const colorMode = useColorMode();

export const setNewTheme = (isDarkTheme: boolean) => {
	isDarkTheme === true
		? (colorMode.value = 'dark')
		: (colorMode.value = 'light');
};

export const isDarkMode = computed(() => colorMode.value === 'dark');
