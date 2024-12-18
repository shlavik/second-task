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
	class={`flex h-[400px] flex-col justify-between rounded-[20px] px-11 py-[52px] mobile:h-[260px] mobile:p-9 mobile:pt-11 ${isNormal ? 'bg-white/5' : 'bg-accent'}`}
>
	<span
		class={`text-[99px] font-medium leading-[0.74] text-darkness mobile:text-[64px] ${isNormal ? 'text-light' : 'text-darkness'}`}
	>
		{value}
	</span>
	<span
		class={`font-secondary text-[17px] font-light leading-[1.55] mobile:text-[14px] ${isNormal ? 'text-white/60' : 'text-dark'}`}
	>
		{description}
	</span>
</div>
