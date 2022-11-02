import invariant from 'tiny-invariant'
import { InferGetStaticPropsType } from 'next'

import { Recipe } from '@components/recipe'
import { datocmsService } from '@services/datocms'

export const getStaticProps = async () => {
  const recipes = await datocmsService.getAllRecipes()

  // Simple error handling by checking if `recipes` exists on query according to our `getAllRecipes` graphql query
  invariant(recipes, "Didn't get expected `recipes` from query")

  return {
    props: {
      recipes,
    },
  }
}

const Recipes = ({
  recipes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid gap-y-10 grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default Recipes
