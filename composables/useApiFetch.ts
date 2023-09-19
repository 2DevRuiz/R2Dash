import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {};

  const token = useCookie("token");

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string
  }

  return useFetch("https://api.escuelajs.co/api/v1/" + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
    //   "X-XSRF-TOKEN": token.value as string,
    ...headers,
    ...options.headers
    },
  });
}
