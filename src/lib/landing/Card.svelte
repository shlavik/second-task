<script lang="ts">
	import { clsx } from 'clsx'

	type Variant = 'primary' | 'secondary'

	interface CardProps {
		value: string
		description: string
		variant?: Variant
	}

	let { value, description, variant = 'primary' }: CardProps = $props()
</script>

<section
	class={clsx(
		'flex h-[400px] flex-col justify-between rounded-[20px] px-11 py-[52px]',
		'desktop:h-80 desktop:px-8 desktop:pb-9 desktop:pt-11',
		'tablet:h-[260px] tablet:rounded-[24px] tablet:px-8 tablet:pb-9 tablet:pt-11',
		'mobile:h-[260px] mobile:p-9 mobile:pt-11',
		variant === 'primary' ? 'bg-mint' : 'bg-white/5',
	)}
>
	<span
		class={clsx(
			'text-[99px] font-medium leading-[0.74]',
			'desktop:text-[68px]',
			'tablet:text-[68px]',
			'mobile:text-[64px]',
			variant === 'primary' ? 'text-text-dark-bold' : 'text-light',
		)}
	>
		{value}
	</span>

	<span
		class={clsx(
			'font-secondary text-[17px] font-light leading-[1.55]',
			'desktop:text-sm',
			'mobile:text-[14px]',
			variant === 'primary' ? 'text-text-dark-thin' : 'text-white/60',
		)}
	>
		{description}
	</span>
</section>
