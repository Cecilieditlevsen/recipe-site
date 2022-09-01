import { gql } from 'graphql-request'

export const getAllRecipesQuery = gql`
  query GetAllRecipes {
    allRecipes {
      featuredImage {
        url
      }
      description {
        value
      }
      excerpt
      id
      ingredients {
        title
        unit
        quantity
        id
      }
      title
    }
  }
`
