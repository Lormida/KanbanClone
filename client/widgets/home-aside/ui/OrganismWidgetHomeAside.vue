<script setup lang="ts">
import MoleculeHomeAsideHeader from './aside-header/MoleculeHomeAsideHeader.vue';
import MoleculeHomeAsideBoards from './aside-boards/MoleculeHomeAsideBoards.vue';
import MoleculeHomeAsideBadgeControls from './aside-badge-controls/MoleculeHomeAsideBadgeControls.vue';

const [isHiddenAside, toggleAsideIsHidden] = useToggle(true);
const sizeAside = computed(() =>
	isHiddenAside.value === true ? 'max-w-[200px]' : 'max-w-[400px]'
);

const target = ref<HTMLElement>();
onMounted(() => {
	watch(isHiddenAside, (isHiddenAsideVal) => {
		if (isHiddenAsideVal === true) {
			animateWidth('hide', target.value);
		} else {
			animateWidth('reveal', target.value);
		}
	});
});

function animateWidth(mode: 'reveal' | 'hide', el: HTMLElement) {
	let start: number;
	let end: number;
	let currentWidth = el.offsetWidth;
	if (mode === 'reveal') {
		end = window.innerWidth * 0.2;
	} else {
		end = 200;
	}
	let duration = 300;
	let startTime = null;
	let easing = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

	function step(timestamp: number) {
		if (!startTime) startTime = timestamp;
		let progress = timestamp - startTime;
		let ease = easing(progress / duration);
		el.style.maxWidth = currentWidth + (end - currentWidth) * ease + 'px';
		if (progress < duration) {
			requestAnimationFrame(step);
		}
	}
	requestAnimationFrame(step);
}
</script>

<template>
	<div ref="target" class="w-full home-aside" :class="[sizeAside]">
		<MoleculeHomeAsideHeader
			class="transition-300"
			:class="{
				'rotate-z--90 translate-y-[200%]': isHiddenAside,
			}"
		>
			kanban
		</MoleculeHomeAsideHeader>

		<Transition name="fade">
			<MoleculeHomeAsideBoards v-if="!isHiddenAside" />
		</Transition>

		<ClientOnly>
			<MoleculeHomeAsideBadgeControls
				:is-hidden-aside="isHiddenAside"
				class="self-center mt-a"
			/>
		</ClientOnly>

		<button
			class="center gap-x-3 w-4/5 mx-a bg-dark-900 px-3 py-4 rounded"
			@click="toggleAsideIsHidden()"
		>
			<span
				class="i-heroicons-eye-slash-20-solid text-3xl light:text-dark dark:text-white"
			></span>
			<h2
				v-if="!isHiddenAside"
				class="text-xl font-bold dark:text-slate-300 light:text-slate-900"
			>
				Hide sidebar
			</h2>
		</button>
	</div>
</template>

<style lang="scss" scoped>
.home-aside {
	@apply flex flex-col transition-300 items-start gap-y-15 h-full py-10  bg-aside;
}

.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scale(0);
}
</style>
