<script lang="ts">
	type BalanceSize = 'small' | 'large'

	interface BalanceProps {
		balance?: number
		ticker?: string
		price?: number
		size?: BalanceSize
	}

	let { balance = 0, ticker = 'BLBX', price = 0.32 }: BalanceProps = $props()
</script>

<div class="flex h-7 flex-row items-center gap-2">
	<span class=" text-[40px] font-medium">{balance.toFixed(2)}</span>

	<div class="flex flex-col gap-2 text-[13px] leading-[9px]">
		<span class="font-secondary text-white/60">${ticker}</span>
		<span class="text-white/30">${(balance * price).toFixed(2)}</span>
	</div>
</div>
