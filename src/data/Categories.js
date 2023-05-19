import {API_URL} from "@/base/siteConfig";

export async function getCategories(){
    const res = await fetch(`${API_URL}/categories`,{ cache: "no-store"})
    return await res.json()
}

export async function getCategoryById(id){
    const res = await fetch(`${API_URL}/categories/${id}`,{ cache: "no-store"})
    return await res.json()
}
