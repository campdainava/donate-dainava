<script lang="ts">
	import { page } from '$app/stores';
	import { Elements, EmbeddedCheckout } from '$lib/index';
	import { loadStripe, type Stripe, type StripeElements } from '@stripe/stripe-js';

	const { data }: PageProps = $props();

	let stripe: Stripe | undefined = $state();
	let clientSecretEmbed: string | undefined = $state();
	let elements: StripeElements | undefined = $state();

	async function createEmbeddedCheckout() {
		const amount = $page.url.searchParams.get('amount');

		const response = await fetch('/create-subscription', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				amount
			})
		});
		const { clientSecretEmbed } = await response.json();
		return clientSecretEmbed;
	}

	$effect(() => {
		if (data.info?.STRIPE_PUBLIC_KEY) {
			(async () => {
				stripe = (await loadStripe(data.info?.STRIPE_PUBLIC_KEY)) || undefined;
				clientSecretEmbed = await createEmbeddedCheckout();
			})();
		}
	});
</script>

<div class="flex flex-col place-items-center">
	<p class="poppins-semibold mt-6 text-[#0d4a80]">RECURRING DONATION</p>
	<div class="container md:p-5 flex gap-8 flex-wrap justify-center">
		{#if stripe}
			<p>Thank you for donating to Dainava!</p>
			<p class="pb-5">
				You will receive a receipt for your donation via email. You can manage your subscription by
				visiting the donation page again.
			</p>
			<Elements {stripe} bind:elements>
				{#if clientSecretEmbed}
					<EmbeddedCheckout {stripe} clientSecret={clientSecretEmbed}></EmbeddedCheckout>
				{/if}
			</Elements>
		{/if}
	</div>
</div>

<style>
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
