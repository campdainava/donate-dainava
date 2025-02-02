<script lang="ts">
	import { onDestroy } from 'svelte';
	import { register } from './util';
	import type { StripeEmbeddedCheckout, Stripe } from '@stripe/stripe-js';

	export let stripe: Stripe;

	export let clientSecret: string;

	let wrapper;

	let checkoutElement: StripeEmbeddedCheckout;

	$: if (stripe) {
		register(stripe);
	}
	let done = false;
	$: if (stripe && clientSecret && wrapper) {
		if (!done) {
			done = true;
			// console.log(stripe, clientSecret, wrapper);
			stripe.initEmbeddedCheckout({ clientSecret }).then((element) => {
				checkoutElement = element;
				checkoutElement?.mount(wrapper);
			});
		}
	}

	onDestroy(() => {
		checkoutElement?.destroy();
	});
</script>

{#if stripe && clientSecret}
	<div style="display:contents" bind:this={wrapper} />
{/if}
