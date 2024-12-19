<script lang="ts">
	import Button from '$lib/ui/Button.svelte'
	import { subDays, formatISO } from 'date-fns'

	type ChartData = [string, number]

	interface ChartProps {
		class?: string
	}

	let { class: className = '' }: ChartProps = $props()

	let days: number = $state(30)
	let data: ChartData[] = $state([])

	function updateMockData(days = 30) {
		let today = new Date()
		data = Array.from({ length: days }, (_, index) => [
			formatISO(subDays(today, index), { representation: 'date' }),
			Math.random() * 100,
		])
	}

	$effect(() => {
		updateMockData(days)
	})
</script>

<div class="relative border-t-[2px] border-dashed border-white/10 {className}">
	<span
		class="absolute top-3 font-secondary text-[13px] leading-[1.45] text-white/30"
	>
		Max 2000.00 $BLBX
	</span>

	<div class="flex h-[158px] flex-row items-end gap-[2px]">
		{#each data as [_, value], index}
			<div
				class="flex-1 cursor-pointer rounded-[4px] bg-purple/40 hover:bg-purple"
				style:height="{value}%"
			></div>
		{/each}
	</div>

	<div class="mt-5 flex h-[34px] flex-row gap-4 overflow-hidden">
		<Button
			text="30 days"
			variant={days === 30 ? 'secondary' : 'transparent'}
			onClick={() => (days = 30)}
		/>
		<Button
			text="90 days"
			variant={days === 90 ? 'secondary' : 'transparent'}
			onClick={() => (days = 90)}
		/>
		<Button text="All time" variant="transparent" disabled />
		<Button text="Custom period" variant="transparent" disabled />

		<svg
			class="ml-auto self-end"
			width="77"
			height="35"
			viewBox="0 0 77 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_b_1_324)">
				<path
					d="M24 19H10.5M10.5 19L13.5 16M10.5 19L13.5 22"
					stroke="white"
					stroke-opacity="0.3"
				/>
				<g clip-path="url(#clip0_1_324)">
					<path
						d="M33.8341 18.7656C33.6913 18.5145 33.6537 18.2172 33.7294 17.9385C33.805 17.6597 33.9879 17.4222 34.238 17.2778C34.4882 17.1334 34.7852 17.0938 35.0645 17.1676C35.3437 17.2414 35.5824 17.4227 35.7285 17.6719L36.75 19.3125V13.4062C36.75 13.1162 36.8653 12.838 37.0704 12.6329C37.2755 12.4277 37.5537 12.3125 37.8438 12.3125C38.1339 12.3125 38.4121 12.4277 38.6172 12.6329C38.8223 12.838 38.9375 13.1162 38.9375 13.4062V16.4688C38.9375 16.1787 39.0528 15.9005 39.2579 15.6954C39.463 15.4902 39.7412 15.375 40.0313 15.375C40.3214 15.375 40.5996 15.4902 40.8047 15.6954C41.0098 15.9005 41.125 16.1787 41.125 16.4688V17.3438C41.125 17.0537 41.2403 16.7755 41.4454 16.5704C41.6505 16.3652 41.9287 16.25 42.2188 16.25C42.5089 16.25 42.7871 16.3652 42.9922 16.5704C43.1973 16.7755 43.3125 17.0537 43.3125 17.3438V19.3125C43.3125 19.887 43.1994 20.4559 42.9795 20.9867C42.7596 21.5175 42.4374 21.9998 42.0311 22.4061C41.6249 22.8123 41.1426 23.1346 40.6118 23.3545C40.081 23.5743 39.5121 23.6875 38.9375 23.6875C36.5214 23.6875 35.8854 22.375 33.8341 18.7656Z"
						stroke="white"
						stroke-opacity="0.3"
						stroke-width="0.875"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
				<path
					d="M53 19H66.5M66.5 19L63.5 16M66.5 19L63.5 22"
					stroke="white"
					stroke-opacity="0.3"
				/>
			</g>
			<defs>
				<filter
					id="filter0_b_1_324"
					x="-199.5"
					y="-200"
					width="476"
					height="435"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="100" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_1_324"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_1_324"
						result="shape"
					/>
				</filter>
				<clipPath id="clip0_1_324">
					<rect
						width="14"
						height="14"
						fill="white"
						transform="translate(31.5 11)"
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
</div>
