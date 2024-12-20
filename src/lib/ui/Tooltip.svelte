<script lang="ts">
	import clsx from 'clsx'
	import type { Snippet } from 'svelte'
	import type { Action } from 'svelte/action'
	import { fade } from 'svelte/transition'

	interface TooltipProps {
		text: string
		position?: 'top' | 'bottom' | 'left' | 'right'
		trigger?: 'hover' | 'click'
		offset?: number
		onShow?: () => void
		onHide?: () => void
		children: Snippet
	}

	const {
		text = '',
		position = 'top',
		trigger = 'hover',
		offset = 8,
		onShow = () => {},
		onHide = () => {},
		children,
	}: TooltipProps = $props()

	let visible = $state(false)
	let tooltipEl: HTMLElement | null = $state(null)
	let childrenEl: HTMLElement | null = $state(null)

	const handleEvents: Action<HTMLElement> = (node: HTMLElement) => {
		const handleMouseEvent = (e: MouseEvent) => {
			if (trigger === 'hover') toggleVisibility(e.type === 'mouseenter')
		}

		const handleClickEvent = (e: MouseEvent) => {
			if (trigger === 'click') toggleVisibility(!visible)
		}

		const handleOutsideClick = (e: MouseEvent) => {
			if (trigger === 'click' && visible && !node.contains(e.target as Node)) {
				toggleVisibility(false)
			}
		}

		node.addEventListener('mouseenter', handleMouseEvent)
		node.addEventListener('mouseleave', handleMouseEvent)
		node.addEventListener('click', handleClickEvent)
		document.addEventListener('click', handleOutsideClick)

		return {
			destroy() {
				node.removeEventListener('mouseenter', handleMouseEvent)
				node.removeEventListener('mouseleave', handleMouseEvent)
				node.removeEventListener('click', handleClickEvent)
				document.removeEventListener('click', handleOutsideClick)
			},
		}
	}

	function toggleVisibility(show: boolean) {
		visible = show
		show ? onShow() : onHide()
	}

	$effect(() => {
		if (visible && tooltipEl && childrenEl) calculatePosition()
	})

	function calculatePosition() {
		if (!tooltipEl || !childrenEl) return
		const childrenRect = childrenEl.getBoundingClientRect()
		const tooltipRect = tooltipEl.getBoundingClientRect()
		let top: number, left: number
		switch (position) {
			case 'top':
				top = childrenRect.top - tooltipRect.height - offset
				left = childrenRect.left + (childrenRect.width - tooltipRect.width) / 2
				break
			case 'bottom':
				top = childrenRect.bottom + offset
				left = childrenRect.left + (childrenRect.width - tooltipRect.width) / 2
				break
			case 'left':
				top = childrenRect.top + (childrenRect.height - tooltipRect.height) / 2
				left = childrenRect.left - tooltipRect.width - offset
				break
			case 'right':
				top = childrenRect.top + (childrenRect.height - tooltipRect.height) / 2
				left = childrenRect.right + offset
				break
		}
		tooltipEl.style.top = `${top}px`
		tooltipEl.style.left = `${left}px`
	}
</script>

<div class="cursor-pointer" use:handleEvents bind:this={childrenEl}>
	{@render children()}

	{#if visible}
		<div
			class="dark absolute z-auto rounded-lg bg-midnight px-3 py-2 font-secondary text-[13px] font-light leading-[1.2] text-white/60"
			bind:this={tooltipEl}
			transition:fade
		>
			<span>{text}</span>
			<div
				class={clsx(
					'absolute border-8 border-transparent',
					position === 'top' &&
						'-bottom-4 left-[calc(50%-8px)] border-t-midnight',
					position === 'bottom' &&
						'-top-4 left-[calc(50%-8px)] border-b-midnight',
					position === 'left' &&
						'-right-4 top-[calc(50%-8px)] border-l-midnight',
					position === 'right' &&
						'-left-4 top-[calc(50%-8px)]  border-r-midnight',
				)}
			></div>
		</div>
	{/if}
</div>
