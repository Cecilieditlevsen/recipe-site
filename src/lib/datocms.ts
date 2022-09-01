import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com'

export const datocmsClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  },
})
