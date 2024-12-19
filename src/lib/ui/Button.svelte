<script lang="ts">
	import { clsx } from 'clsx'

	type ButtonSize = 'small' | 'large'
	type ButtonVariant = 'light' | 'dark'

	interface ButtonProps {
		text?: string
		variant?: ButtonVariant
		size?: ButtonSize
		loading?: boolean
		name?: string
		disabled?: boolean
	}

	let {
		text = 'Button',
		variant = 'dark',
		size = 'large',
		loading = false,
		name = '',
		disabled = false,
	}: ButtonProps = $props()

	const sizes: Record<ButtonSize, string> = {
		small: 'h-[34px] rounded-lg px-4',
		large: 'h-12 rounded-3xl px-6',
	}
</script>

<button
	class={clsx(
		sizes[size],
		'relative font-secondary font-medium',
		'transition-colors',
		'flex items-center justify-center gap-2',
		variant === 'light' && [
			'bg-button-light-base text-button-light-text',
			!disabled && 'hover:bg-button-light-hover active:bg-button-light-active',
			,
		],
		variant === 'dark' && [
			'bg-button-dark-base text-button-dark-text',
			!disabled && 'hover:bg-button-dark-hover active:bg-button-dark-active',
		],
		disabled && 'cursor-not-allowed opacity-50',
	)}
	{name}
	{disabled}
>
	{#if loading}
		<div class="spinner relative h-6 w-6 animate-spin"></div>
	{:else}
		{text}
	{/if}
</button>

<style>
	.spinner::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 50%;
		padding: 2.5px;
		background: conic-gradient(
			from -9.46deg at 50% 50%,
			transparent 0deg,
			currentColor 360deg
		);
		mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}
</style>
