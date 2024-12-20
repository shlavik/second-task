<script>
	import Balance from '$lib/rewards/Balance.svelte'
	import Chart from '$lib/rewards/Chart.svelte'
	import DotLabel from '$lib/rewards/DotLabel.svelte'
	import InfoLabel from '$lib/rewards/InfoLabel.svelte'
	import ProgressBar from '$lib/rewards/ProgressBar.svelte'
	import Title from '$lib/rewards/Title.svelte'
	import Button from '$lib/ui/Button.svelte'
</script>

<div class="m-auto grid w-[1584px] grid-cols-2 gap-3 px-2 pt-10">
	<Title class="col-span-2">Rewards</Title>

	<section
		class="grid grid-cols-[1fr_auto] grid-rows-[42px_28px_auto_auto] gap-4 rounded-[24px] bg-white/5 p-8 pb-8 pt-7"
	>
		<Title class="col-span-2" inner>Last day, Nov 29</Title>
		<Balance balance={1820} />
		<InfoLabel class="items-end" label="Nodes active" value="9/10" />
		<InfoLabel label="Unlock" value="Feb 27, 2025" />
		<InfoLabel label="Uptime" value="215 hr" />
		<Chart class="col-span-2" />
	</section>

	<section
		class="grid grid-cols-[1fr_1fr] grid-rows-[73px_70px_32px_30px_auto_auto] overflow-hidden rounded-[24px] bg-white/5 p-8 pb-6 pt-7"
	>
		<Title class="col-span-2" inner>Total distribution</Title>
		<Balance balance={20000} size="small" />
		<ProgressBar class="col-span-2" />
		<DotLabel class="self-start" text="Held" color="purple" />
		<DotLabel class="ml-8 self-start" text="Released" color="mint" />
		<Balance balance={18200} />
		<Balance class="ml-8" balance={1800} />
		<Button
			class="w-fit self-end"
			text="Upcoming unlocks"
			variant="secondary"
			size="large"
		/>
		<Button class="ml-8 w-fit self-end" text="Claim rewards" size="large" />
	</section>
</div>
