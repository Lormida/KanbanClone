<script setup lang="ts"></script>

<template>
	<div
		class="flex items-center w-full justify-start gap-x-6 px-3 rounded-xl cursor-pointer py-4 4xl:py-6 transition-300 dark:hover:bg-purple-800 light:hover:bg-purple-300"
	>
		<div
			class="i-ic-outline-space-dashboard text-3xl h-10 bg-10 text-antiMainAccent"
		/>
		<p class="text-3xl 4xl:text-4xl text-antiMainAccent">
			<slot />
		</p>
	</div>
</template>
