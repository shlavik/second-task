<script>
	import Card from '$lib/node-sale/Card.svelte'
</script>

<div class="grid grid-cols-2 gap-6 rounded-[40px] bg-sale p-5">
	<div class="flex flex-col gap-4 pb-[66px] pl-[148px] pt-20">
		<span class="text-sm leading-[1.1] text-white/60">Our DePIN</span>
		<h3 class="flex flex-col text-5xl font-medium leading-[1.2]">
			<span>The largest DePIN</span>
			<span>on the market</span>
		</h3>
	</div>
	<div
		class="flex flex-col justify-end text-nowrap pb-[66px] font-secondary text-[19px] font-light leading-[1.55] text-white/60"
	>
		<span>
			Our decentralized infrastructure network gets stronger with each user.
		</span>
		<span>Together, we're democratizing AI one node at a time.</span>
	</div>
	<Card value="150,457" description="Total Nodes" variant="accent" />
	<Card value="1,5m+" description="Rewards paid in $BLBX" />
</div>
