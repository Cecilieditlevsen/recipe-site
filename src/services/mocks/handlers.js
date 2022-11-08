// src/mocks/handlers.js
import { graphql } from 'msw'
import { datocmsClient } from '@services/datocms/client'

export const handlers = [
    // Handles a "GetUserInfo" query
    graphql.query(datocmsClient.GetAllRecipes(), (req, res, ctx) => {

        // When authenticated, respond with a query payload
        return res(
            ctx.data({
                recipe: {
                    id: 1,
                    title: 'John',
                    description: 'Doe'
                },
            }),
        )
    })
]