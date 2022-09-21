import { GraphQLClient } from 'graphql-request'

import { env } from '@config/env'

import { getSdk } from '@services/datocms/generated'

const client = new GraphQLClient(env.DATOCMS_GRAPHQL_URL, {
  headers: {
    authorization: `Bearer ${env.DATOCMS_ACCESS_TOKEN}`,
    'content-type': 'application/json',
    accept: 'application/json',
  },
})

export const datocmsClient = getSdk(client)
