<script lang="ts">
	import Button from './Button.svelte';
	export let imgSrc: string;
	export let href: string | null = null;
	export let href2: string | null = null;
	export let cardClass: string | null = null;

	export let buttons: { label: string; url: string }[] = [];
</script>

<div class="{cardClass} flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow">
	<a {href}>
		<img class="rounded-t-lg object-cover w-full h-[200px]" src={imgSrc} alt="" />
	</a>
	<div class="flex flex-col grow p-5 bg-gray-100">
		<a {href}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
				<slot name="title"></slot>
			</h5>
		</a>
		<div class="mb-3 font-normal text-gray-700">
			<slot name="description"></slot>
		</div>

		{#if buttons.length > 0}
			<div class="grid grid-cols-2 gap-4 mb-3">
				{#each buttons as button (button.label)}
					<Button href={button.url}
						><svelte:fragment slot="buttonLabel">{button.label}</svelte:fragment></Button
					>
				{/each}
			</div>
		{/if}
		<!-- <div class="flex grow"></div> -->
		<Button {href}>
			<slot name="buttonLabel" slot="buttonLabel"></slot>
		</Button>
		<Button href={href2}>
			<slot name="buttonLabel2" slot="buttonLabel"></slot>
		</Button>
	</div>
</div>
