export type FetchFunction = (input: RequestInfo, init?: RequestInit) => Promise<Response>;


export const info = $state({
  STRIPE_PUBLIC_KEY: '',
  THANKS_URL: '',
  SUBSCRIPTION_PORTAL_URL: '',
  DAINAVA_URL: '',
  DAINAVA_WAYS_TO_DONATE_URL: '',
});

export const loadinfo = async (fetch: FetchFunction) => {
  const inforesponse = await fetch('/info');
  const infodata = await inforesponse.json();
  Object.assign(info, infodata);
  return info;
}