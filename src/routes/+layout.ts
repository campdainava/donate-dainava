import { loadinfo } from "$lib/dainava/info.svelte";
import type { PageServerLoad, PageServerLoadEvent } from "./$types";

export const ssr = true;
export const csr = true;

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
  const data = await loadinfo(event.fetch)
  return {
    info: data
  };
};