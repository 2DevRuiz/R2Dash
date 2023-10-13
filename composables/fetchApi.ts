import { UseFetchOptions } from "nuxt/app";
export function fetchApi <T>(request:string, options: UseFetchOptions<T> = {})  {
    const config = useRuntimeConfig()
    const xsrfToken = useCookie('XSRF-TOKEN')
    let headers:any = {
        accept: 'application/json',
        ...options?.headers,
    }
    if (xsrfToken && xsrfToken.value !== null) {
        headers['X-XSRF-TOKEN'] = xsrfToken.value as string;
    }
    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(['cookie']),
            referer: 'localhost:3000',
        }
    }
    return useFetch(request, {
        baseURL: 'http://localhost:8000',
        headers,
        credentials: 'include',
        ...options,
    })
}