import { z } from 'zod'

const envSchema = z.object({
  DATOCMS_GRAPHQL_URL: z.string(),
  DATOCMS_ACCESS_TOKEN: z.string(),
})

const envVariables = {
  DATOCMS_GRAPHQL_URL: process.env.NEXT_PUBLIC_DATOCMS_GRAPHQL_URL,
  DATOCMS_ACCESS_TOKEN: process.env.NEXT_PUBLIC_DATOCMS_ACCESS_TOKEN,
}

export const env = envSchema.parse(envVariables)
