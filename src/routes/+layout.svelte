<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<header>
	<nav>
		<ul class="flex flex-row justify-center gap-8 bg-accent/5 p-2">
			<li>
				<a class="hover:text-accent" href="/node-sale">Node sale</a>
			</li>
			<li>
				<a class="hover:text-accent" href="/dashboard">Dashboard</a>
			</li>
		</ul>
	</nav>
</header>

<main class="p-3">
	{@render children()}
</main>
