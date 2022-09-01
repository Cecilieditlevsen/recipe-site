import Recipe from '../components/recipe'
import { recipes as hardcodedRecipes } from '../data/recipes'
import { datocmsClient } from '../lib/datocms'
import { getAllRecipesQuery } from '../queries/get-all-recipes-query'
import invariant from 'tiny-invariant'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  // Fetch from datocms via our datocms client with the `getAllRecipes` query
  const query = await datocmsClient.request(getAllRecipesQuery)

  // Simple error handling by checking if `allRecipes` exists on query according to our `getAllRecipes` graphql query
  invariant(query?.allRecipes, "Didn't get expected `allRecipes` from query")

  return {
    props: {
      recipes: query.allRecipes,
    },
  }
}

const Recipes = ({
  recipes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Log datocms query result to the console
  console.table(recipes)

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid gap-y-10 grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {hardcodedRecipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Recipes
