import { createClient } from "@sanity/client"
import { ImageUrlBuilder } from "@sanity/image-url"


export const client = createClient(
    {projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2024-02-08',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN}

)

const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

