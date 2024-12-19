<script>
	import Chart from '$lib/rewards/Chart.svelte'
	import Button from '$lib/ui/Button.svelte'
</script>

<div class="mx-auto grid w-[1584px] grid-cols-2 gap-3 p-2 pt-10">
	<h2 class="col-span-2 mb-10 text-[28px] font-medium">Rewards</h2>

	<section class="rounded-[24px] bg-white/5 p-8 pb-8 pt-7">
		<h3>Last day, Nov 29</h3>

		<div class="mb-9 grid grid-cols-2 gap-4 leading-[0.74]">
			<div class="flex h-7 flex-row gap-2">
				<span class="text-[40px] font-medium">1820.00</span>

				<div class="flex flex-col gap-2 text-[13px]">
					<span class="font-secondary text-white/60">$BLBX</span>
					<span class="">$573.736</span>
				</div>
			</div>

			<dl class="h-7 items-end justify-end">
				<dt>Nodes active:</dt>
				<dd class="text-lg">9/10</dd>
			</dl>

			<dl class="">
				<dt>Unlock:</dt>
				<dd class="text-lg">Feb 27, 2025</dd>
			</dl>

			<dl class="justify-end">
				<dt>Uptime:</dt>
				<dd class="text-lg">215 hr</dd>
			</dl>
		</div>

		<Chart />
	</section>

	<section class="rounded-[24px] bg-white/5 p-8 pt-7">
		<div class="flex flex-col justify-between">
			<h3>Total distribution</h3>

			<div class="mb-4 pt-[6px]">
				<span class="font-primary text-[22px] font-medium leading-[0.74]">
					20000.00
				</span>
				<span
					class="self-end font-secondary text-[13px] font-light text-white/60"
				>
					$BLBX
				</span>
			</div>

			<span
				class="font-secondary text-[13px] font-light leading-[0.74] text-white/60"
			>
				$6439.01
			</span>
		</div>

		<div></div>
	</section>
</div>

<style>
	h3 {
		@apply mb-6 flex h-[34px] items-center font-secondary text-sm font-light;
	}

	dl {
		@apply flex gap-2 font-light;
	}

	dt {
		@apply font-secondary text-[13px] leading-[9px] text-white/60;
	}

	dd {
		@apply font-secondary text-[13px] leading-[9px] text-light;
	}
</style>
