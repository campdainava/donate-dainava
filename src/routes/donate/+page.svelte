<script lang="ts">
	import Card from '$lib/dainava/Card.svelte';
	import type { PageProps } from '../$types';
	import { browser } from '$app/environment';

	let campaignId: string | null | undefined = undefined;

	function addQueryParams(url: string, params: Record<string, string> = {}) {
		if (Object.keys(params).length === 0 && !campaignId) {
			return url;
		}
		const searchparams = new URLSearchParams();
		for (const key in params) {
			searchparams.set(key, params[key]);
		}
		if (campaignId) {
			searchparams.set('cid', campaignId);
		}
		return url + '?' + searchparams.toString();
	}

	const { data }: PageProps = $props();
	if (browser) {
		const urlParams = new URLSearchParams(window.location.search);

		campaignId = urlParams.get('cid');
	}

	const buttons = [
		{ label: '$2/mo', url: addQueryParams('/donate/recurring', { amount: '2' }) },
		{ label: '$5/mo', url: addQueryParams('/donate/recurring', { amount: '5' }) },
		{ label: '$10/mo', url: addQueryParams('/donate/recurring', { amount: '10' }) },
		{ label: '$25/mo', url: addQueryParams('/donate/recurring', { amount: '25' }) },
		{ label: '$50/mo', url: addQueryParams('/donate/recurring', { amount: '50' }) },
		{ label: '$100/mo', url: addQueryParams('/donate/recurring', { amount: '100' }) }
	];
</script>

<div class="flex flex-col place-items-center">
	<p class="poppins-semibold mt-6 text-[#0d4a80]">DONATE</p>
	<div class="container p-5 flex gap-8 flex-wrap justify-center">
		<div class="flex w-full place-items-center flex-col">
			<p>Thank you for donating to Dainava!</p>
		</div>
		<Card cardClass="w-[350px]" imgSrc="/IMG_5013.jpeg" href={addQueryParams('/donate/one-time')}>
			<p slot="title">One Time Donation</p>
			<p slot="description" class="h-[75px]">You can make a single donation here.</p>
			<p slot="buttonLabel">Donate</p>
		</Card>
		<Card
			cardClass="w-[350px]"
			imgSrc="/IMG_5417.jpeg"
			href={data.info?.SUBSCRIPTION_PORTAL_URL}
			{buttons}
		>
			<p slot="title">Monthly Donation</p>
			<p slot="description" class="h-[75px]">
				You can show your support all year with a monthly donation.
			</p>
			<p slot="buttonLabel">Manage Subscription</p>
		</Card>
	</div>
</div>

<style lang="postcss">
	@font-face {
		src: url('/Poppins-SemiBold.ttf') format('truetype');
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	.container {
		max-width: 1024px;
		background-color: white;
	}

	.poppins-semibold {
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-style: normal;
		font-size: 35px;
	}
</style>
