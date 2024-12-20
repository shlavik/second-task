<script lang="ts">
	import colors from '$lib/constants/colors.json'

	interface ProgressBarProps {
		class?: string
	}

	let { class: className = '' }: ProgressBarProps = $props()
</script>

<bar class="relative -mx-8 flex h-2 flex-row {className}">
	<div class="relative w-[608px] bg-purple" style:--color={colors.purple}></div>
	<div class="relative flex-1 bg-mint" style:--color={colors.mint}></div>
</bar>

<style>
	bar {
		clip-path: polygon(0 0, 100% 0, 100% 420px, 0 420px);
	}

	bar::after {
		content: '';
		@apply absolute left-0 right-0 top-2 mx-auto h-screen w-px bg-white/10;
	}

	bar > div::before {
		content: '';
		box-shadow: 0 -8px 120px 16px var(--color);
		@apply absolute left-0 right-0 top-0 opacity-50;
	}
</style>
