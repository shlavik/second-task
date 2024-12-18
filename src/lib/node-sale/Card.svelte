<script lang="ts">
	type Variant = 'normal' | 'accent'

	interface CardProps {
		value: string
		description: string
		variant?: Variant
	}

	let { value, description, variant = 'normal' }: CardProps = $props()

	let isNormal = $derived(variant === 'normal')
</script>

<div
	class={`flex h-[400px] flex-col justify-between rounded-[20px] px-11 py-[52px] ${isNormal ? 'bg-white/5' : 'bg-accent'}`}
>
	<span
		class={`text-darkness text-[99px] font-medium leading-[0.74] ${isNormal ? 'text-light' : 'text-darkness'}`}
	>
		{value}
	</span>
	<span
		class={`font-secondary text-[17px] font-light leading-[1.55] ${isNormal ? 'text-white/60' : 'text-dark'}`}
	>
		{description}
	</span>
</div>
