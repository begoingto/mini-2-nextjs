import {API_URL} from "@/base/siteConfig";

export async function getUsers(){
    const res = await fetch(`${API_URL}/users`,{ cache: "no-store"})
    return await res.json()
}