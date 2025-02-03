import Stripe from 'stripe';
import { env } from '$env/dynamic/private';

import { json } from '@sveltejs/kit';

// initialize Stripe
const stripe = new Stripe(env.SECRET_SEC_STRIPE_KEY);

const return_url = env.THANKS_URL;

// handle POST /create-payment-intent
export async function POST({ request }) {
	let id: string | undefined = '';
	let { amount, campaignId }
		= await request.json();
	if (!amount) {
		throw new Error("Invalid")
	}
	amount = +amount;
	if (amount === 2) {
		id = env.SECRET_PRICE_2
	} else if (amount === 5) {
		id = env.SECRET_PRICE_5
	} else if (amount === 10) {
		id = env.SECRET_PRICE_10
	} else if (amount === 25) {
		id = env.SECRET_PRICE_25
	} else if (amount === 50) {
		id = env.SECRET_PRICE_50
	} else if (amount === 100) {
		id = env.SECRET_PRICE_100
	}
	if (!id) {
		throw new Error("Invalid")
	}

	const metadata: { [id: string]: string } = {};

	if (campaignId) {
		metadata.campaignId = campaignId;
	}

	const session = await stripe.checkout.sessions.create({
		metadata,
		ui_mode: 'embedded',
		line_items: [
			{
				price: id,
				quantity: 1,
				// adjustable_quantity: {
				// 	enabled: true,
				// 	minimum: 1,
				// 	maximum: 99
				// }
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
		mode: 'subscription',
		return_url,
		subscription_data: {
			description: "Recurring Monthly Donation to Camp Dainava. Tax ID: 38-1717920"
		}
	})
	// console.log(session);
	return json({
		clientSecretEmbed: session.client_secret
	})

}
