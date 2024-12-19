<script>
	import colors from '$lib/constants/colors.json'
</script>

<bar class="-mx-8 flex h-2 flex-row">
	<div class="relative w-[608px] bg-purple" style:--color={colors.purple}></div>
	<div class="relative flex-1 bg-mint" style:--color={colors.mint}></div>
</bar>

<style>
	bar {
		clip-path: polygon(0 0, 100% 0, 100% 200px, 0 200px);
	}

	bar > div::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		opacity: 0.5;
		box-shadow: 0 -8px 120px 16px var(--color);
		z-index: -1;
	}
</style>
