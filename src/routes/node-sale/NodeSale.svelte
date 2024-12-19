<script>
	import Card from '$lib/node-sale/Card.svelte'
</script>

<section
	class="bg-sale-background grid grid-cols-2 gap-6 rounded-[40px] p-5 tablet:gap-3 tablet:rounded-[36px] tablet:p-3 mobile:grid-cols-1"
>
	<div
		class="flex flex-col gap-4 pb-[66px] pl-[148px] pt-20 desktop:pb-14 desktop:pl-[68px] desktop:pt-[60px] tablet:pl-10 tablet:pt-12 mobile:px-3 mobile:pb-2 mobile:pt-10"
	>
		<span class="text-sm leading-[1.1] text-white/60">Our DePIN</span>
		<h2
			class="flex flex-col text-5xl font-medium leading-[1.2] desktop:text-[32px] tablet:text-[32px] mobile:text-[32px]"
		>
			<span>The largest DePIN</span>
			<span>on the market</span>
		</h2>
	</div>
	<div
		class="flex flex-col justify-end pb-[66px] pr-[64px] desktop:pb-14 tablet:pr-8 mobile:px-3 mobile:pb-6 mobile:pt-2"
	>
		<p
			class="flex-col font-secondary text-[19px] font-light leading-[1.55] text-white/60 lg-desktop:flex md-desktop:block desktop:flex desktop:text-[15px] sm-desktop:block tablet:text-[15px] mobile:text-[15px]"
		>
			<span>
				Our decentralized infrastructure network gets stronger with each user.
			</span>
			<span>Together, we're democratizing AI one node at a time.</span>
		</p>
	</div>
	<Card value="150,457" description="Total Nodes" variant="accent" />
	<Card value="1,5m+" description="Rewards paid in $BLBX" />
</section>
