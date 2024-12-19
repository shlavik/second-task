<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<header>
	<nav>
		<ul class="flex flex-row justify-center gap-8 bg-mint/5 p-2">
			<li>
				<a class="hover:text-mint" href="/landing">Landing</a>
			</li>
			<li>
				<a class="hover:text-mint" href="/rewards">Rewards</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>
