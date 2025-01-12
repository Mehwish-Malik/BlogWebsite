import { createClient } from 'next-sanity'



export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:"production",
  apiVersion: "v2025-01-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
