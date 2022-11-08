import { datocmsClient } from '@services/datocms/client'
import {Recipe, recipeListSchema} from '@services/datocms/validations/recipe'

export async function getAllRecipes(): Promise<Recipe[] | undefined> {
  const data = await datocmsClient.GetAllRecipes()

  try {
    const mappedRecipes: Recipe[] = data.allRecipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title ?? 'No title',
      description: recipe.excerpt ?? 'No description',
      slug: recipe.slug ?? 'not found',
      image: recipe.featuredImage?.url ?? 'no image',
      ingredients: recipe.ingredients.map((ingredient) => ({unit: '', title: '', quantity: 2, id: 1}))
    }))

    return recipeListSchema.parse(mappedRecipes)
  } catch (error) {
    console.error(error)
  }
}
