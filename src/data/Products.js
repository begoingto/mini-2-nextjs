import {API_URL} from "@/base/siteConfig";

export async function getProducts(){
    const res = await fetch(`${API_URL}/products?limit=20&offset=0`,{ cache: "no-store"})
    return await res.json()
}