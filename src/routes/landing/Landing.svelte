<script>
	import Title from '$lib/landing/ Title.svelte'
	import Card from '$lib/landing/Card.svelte'
	import Description from '$lib/landing/Description.svelte'
</script>

<div
	class="m-3 grid grid-cols-2 gap-6 rounded-[40px] bg-sale-background p-5 tablet:gap-3 tablet:rounded-[36px] tablet:p-3 mobile:mx-0 mobile:grid-cols-1"
>
	<Title />

	<Description />

	<Card value="150,457" description="Total Nodes" />

	<Card value="1,5m+" description="Rewards paid in $BLBX" variant="secondary" />
</div>
