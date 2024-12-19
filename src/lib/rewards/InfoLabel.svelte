<script lang="ts">
	interface InfoLabelProps {
		label: string
		value: string
		class?: string
	}

	let { label, value, class: className = '' }: InfoLabelProps = $props()
</script>

<dl class="flex h-7 gap-2 font-light {className}">
	<dt class="font-secondary text-[13px] leading-[9px] text-white/60">
		{label}:
	</dt>
	<dd class="font-secondary text-[13px] leading-[9px] text-light">{value}</dd>
</dl>
