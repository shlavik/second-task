<script>
	import Balance from '$lib/rewards/Balance.svelte'
	import Chart from '$lib/rewards/Chart.svelte'
	import DotLabel from '$lib/rewards/DotLabel.svelte'
	import InfoLabel from '$lib/rewards/InfoLabel.svelte'
	import ProgressBar from '$lib/rewards/ProgressBar.svelte'
	import SubTitle from '$lib/rewards/SubTitle.svelte'
	import Button from '$lib/ui/Button.svelte'
</script>

<div class="m-auto grid w-[1584px] grid-cols-2 gap-3 px-2 pt-10">
	<h2 class="col-span-2 mb-10 text-[28px] font-medium">Rewards</h2>

	<section
		class="grid grid-cols-[auto_128px] grid-rows-[42px_28px_auto_auto] gap-4 rounded-[24px] bg-white/5 p-8 pb-8 pt-7"
	>
		<SubTitle>Last day, Nov 29</SubTitle>

		<Balance balance={1820} />

		<InfoLabel class="items-end" label="Nodes active" value="9/10" />

		<InfoLabel label="Unlock" value="Feb 27, 2025" />

		<InfoLabel label="Uptime" value="215 hr" />

		<Chart class="col-span-2" />
	</section>

	<section class="rounded-[24px] bg-white/5 p-8 pt-7">
		<div class="flex flex-col justify-between">
			<SubTitle>Total distribution</SubTitle>

			<div class="mb-4 pt-[4px]">
				<span class="font-primary text-[22px] font-medium leading-[15px]">
					20000.00
				</span>
				<span
					class="self-end font-secondary text-[13px] font-light text-white/60"
				>
					$BLBX
				</span>
			</div>

			<span
				class="font-secondary text-[13px] font-light leading-[15px] text-white/60"
			>
				$6439.01
			</span>
		</div>

		<ProgressBar />

		<div class="mt-8 grid flex-1 grid-cols-2 grid-rows-[auto_auto_128px] gap-4">
			<DotLabel text="Held" color="purple" />
			<DotLabel text="Released" color="mint" />
			<Balance balance={18200} />
			<Balance balance={1800} />
			<div class="self-end">
				<Button text="Upcoming unlocks" size="large" />
			</div>
			<div class="self-end">
				<Button text="Claim rewards" variant="primary" size="large" />
			</div>
		</div>
	</section>
</div>
