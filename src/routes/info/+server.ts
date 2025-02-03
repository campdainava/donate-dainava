
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

const {
  STRIPE_PUBLIC_KEY,
  THANKS_URL,
  SUBSCRIPTION_PORTAL_URL,
  DAINAVA_URL,
  DAINAVA_WAYS_TO_DONATE_URL,
} = env;


export async function GET() {
  return json({
    STRIPE_PUBLIC_KEY,
    THANKS_URL,
    SUBSCRIPTION_PORTAL_URL,
    DAINAVA_URL,
    DAINAVA_WAYS_TO_DONATE_URL,
  })

}
