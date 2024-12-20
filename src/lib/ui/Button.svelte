<script lang="ts">
	import { clsx } from 'clsx'

	type ButtonSize = 'small' | 'large'
	type ButtonVariant = 'primary' | 'secondary' | 'transparent'

	interface ButtonProps {
		variant?: ButtonVariant
		size?: ButtonSize
		text?: string
		loading?: boolean
		name?: string
		disabled?: boolean
		class?: string
		onClick?: (event: MouseEvent) => void
		onMouseEnter?: (event: MouseEvent) => void
		onMouseLeave?: (event: MouseEvent) => void
		onFocus?: (event: FocusEvent) => void
		onBlur?: (event: FocusEvent) => void
	}

	let {
		text = '',
		variant = 'primary',
		size = 'small',
		loading = false,
		name = '',
		disabled = false,
		class: className = '',
		onClick = undefined,
		onMouseEnter = undefined,
		onMouseLeave = undefined,
		onFocus = undefined,
		onBlur = undefined,
	}: ButtonProps = $props()

	const sizes: Record<ButtonSize, string> = {
		small: 'h-[34px] rounded-lg px-4',
		large: 'h-12 rounded-3xl px-6',
	}
</script>

<button
	class={clsx(
		sizes[size],
		'relative flex items-center justify-center gap-2 font-secondary transition-colors',
		size === 'small' ? 'font-light' : 'font-medium',
		variant === 'primary' && [
			'bg-button-light-base text-button-light-text',
			!disabled && 'hover:bg-button-light-hover active:bg-button-light-active',
		],
		variant === 'secondary' && [
			'bg-button-dark-base text-button-dark-text',
			!disabled && 'hover:bg-button-dark-hover active:bg-button-dark-active',
		],
		variant === 'transparent' && [
			'bg-button-transparent-base text-button-transparent-text',
			!disabled &&
				'hover:bg-button-transparent-hover active:bg-button-transparent-active',
		],
		disabled && 'cursor-not-allowed opacity-50',
		className,
	)}
	{name}
	{disabled}
	onclick={onClick}
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
	onfocus={onFocus}
	onblur={onBlur}
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
