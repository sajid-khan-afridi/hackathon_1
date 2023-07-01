import { createClient } from "next-sanity";

export const client= createClient({
    apiVersion:"2023-06-18",
    dataset:"production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.NEXT_TOKEN,
    useCdn:true,
})