import { Recipe, recipeSchema } from '@services/datocms/validations/recipe'
import { datocmsClient } from '@services/datocms/client'
import { ingredientListSchema } from '@services/datocms/validations/ingredient'

export async function getSingleRecipe(slug: {
  slug: string
}): Promise<Recipe | undefined> {
  const data = await datocmsClient.GetSingleRecipe(slug)

  try {
    const mappedRecipe: Recipe = {
      id: data.recipe?.id,
      title: data.recipe?.title ?? 'No title',
      description: data.recipe?.slug ?? 'No description',
      slug: data.recipe?.slug ?? 'not found',
      image: data.recipe?.featuredImage?.url ?? 'no image',
      ingredients: ingredientListSchema.parse(data.recipe?.ingredients),
    }

    return recipeSchema.parse(mappedRecipe)
  } catch (error) {
    console.error(error)
  }
}
