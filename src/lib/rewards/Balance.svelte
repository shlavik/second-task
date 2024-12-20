<script lang="ts">
	import clsx from 'clsx'

	type BalanceSize = 'small' | 'large'

	interface BalanceProps {
		balance?: number
		ticker?: string
		price?: number
		size?: BalanceSize
		class?: string
	}

	let {
		balance = 0,
		ticker = 'BLBX',
		price = 0.32,
		size = 'large',
		class: className = '',
	}: BalanceProps = $props()
</script>

<div
	class={clsx(
		'grid h-7 grid-cols-[auto_auto]  items-center gap-2',
		size === 'large' && 'w-max grid-rows-2',
		size === 'small' && 'w-max grid-rows-[15px_15px]',
		className,
	)}
>
	<span
		class={clsx(
			'font-medium',
			size === 'large' && 'row-span-2 text-[40px]',
			size === 'small' && 'text-[22px]',
		)}
	>
		{balance.toFixed(2)}
	</span>

	<span
		class={clsx(
			'font-secondary text-[13px] leading-[9px] text-white/60',
			size === 'small' && 'self-end',
		)}
	>
		${ticker}
	</span>

	<span
		class={clsx(
			'text-[13px] leading-[9px]',
			size === 'large' && 'text-white/30',
			size === 'small' && 'self-end text-white/60',
		)}
	>
		${(balance * price).toFixed(2)}
	</span>
</div>
