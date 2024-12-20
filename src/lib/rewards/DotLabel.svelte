<script lang="ts">
	import { clsx } from 'clsx'

	interface DotLabelProps {
		text: string
		color: 'mint' | 'purple'
		class?: string
	}

	let { text, color, class: className = '' }: DotLabelProps = $props()
</script>

<div class="flex flex-row items-center gap-2 {className}">
	<div
		class={clsx(
			'flex h-2 w-2 rounded-full',
			color === 'mint' ? 'bg-mint' : 'bg-purple',
		)}
	></div>
	<span class="font-secondary text-sm font-light text-light">{text}</span>
</div>
