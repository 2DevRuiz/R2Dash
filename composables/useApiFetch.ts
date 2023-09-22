import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {
    accept: "application/json",
    referer: "http://localhost:3000"
  }

  const token = useCookie("XSRF-TOKEN");

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string
  }
  // console.log(token.value)
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
        referer: "http://localhost:3000",
    }
  }
  // return useFetch("https://api.escuelajs.co/api/v1/" + path, {
  //   credentials: "include",
  //   watch: false,
  //   ...options,
  //   headers: {
  //   //   "X-XSRF-TOKEN": token.value as string,
  //   ...headers,
  //   ...options.headers
  //   },
  // });
  // const token = useCookie("XSRF-TOKEN");
  return useFetch("http://localhost:8000" + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      // "X-XSRF-TOKEN": token.value as string,
      ...headers,
      ...options?.headers
    },
  });
}
