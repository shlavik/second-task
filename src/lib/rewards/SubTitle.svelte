<script lang="ts">
	import type { Snippet } from 'svelte'

	interface SubTitleProps {
		children?: Snippet
	}

	let { children }: SubTitleProps = $props()
</script>

<h3
	class="col-span-2 flex h-[34px] items-center font-secondary text-sm font-light"
>
	{@render children?.()}
</h3>
