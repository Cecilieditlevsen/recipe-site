import {Recipe, recipeIngredientSchema, recipeSchema} from '@services/datocms/validations/recipe'
import { datocmsClient } from '@services/datocms/client'
import {z} from 'zod'


export async function getSingleRecipe(slug: {slug: string}): Promise<Recipe | undefined> {
  const data = await datocmsClient.GetSingleRecipe(slug)

  try {
    const mappedRecipe: Recipe = {
      id: data.recipe?.id,
      title: data.recipe?.title?? 'No title',
      description: data.recipe?.slug ?? 'No description',
      slug: data.recipe?.slug ?? 'not found',
      image: data.recipe?.featuredImage?.url ?? 'no image',
      ingredients: data.recipe?.ingredients.map((ingredient) => ({unit: '', title: '', quantity: 2, id: 1})) ?? [{title: '', quantity: 1, unit: '', id: 1}]
    }

    return recipeSchema.parse(mappedRecipe)
  } catch (error) {
    console.error(error)
  }
}
