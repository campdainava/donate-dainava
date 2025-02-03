import Stripe from 'stripe';
import { env } from '$env/dynamic/private';

import { json } from '@sveltejs/kit';

// initialize Stripe
const stripe = new Stripe(env.SECRET_SEC_STRIPE_KEY);
const return_url = env.THANKS_URL;

// handle POST /create-payment-intent
export async function POST({ request }) {
	const metadata: { [id: string]: string } = {};

	const body = await request.json();
	if (body.campaignId) {
		metadata.campaignId = body.campaignId;
	}

	const session = await stripe.checkout.sessions.create({
		metadata,
		ui_mode: 'embedded',
		line_items: [
			{
				price: env.SECRET_PRICE_ONE_TIME,
				quantity: 1,
			},
		],
		phone_number_collection: {
			enabled: true,
		},
		custom_fields: [
			{
				key: 'firstname',
				label: {
					type: 'custom',
					custom: 'Firstname',
				},
				type: 'text',
				optional: false
			},
			{
				key: 'lastname',
				label: {
					type: 'custom',
					custom: 'Lastname',
				},
				type: 'text',
				optional: false
			},
		],
		billing_address_collection: 'required',
		mode: 'payment',
		submit_type: 'donate',
		return_url,
		payment_intent_data: {
			description: "Donation to Camp Dainava. Tax ID: 38-1717920"
		}
	})
	// console.log(session);
	return json({
		clientSecretEmbed: session.client_secret
	})

}
