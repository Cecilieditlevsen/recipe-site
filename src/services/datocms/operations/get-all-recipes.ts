import { datocmsClient } from '@services/datocms/client'
import { Recipe, recipeListSchema } from '@services/datocms/validations/recipe'
import { ingredientListSchema } from '@services/datocms/validations/ingredient'

export async function getAllRecipes(): Promise<Recipe[] | undefined> {
  const data = await datocmsClient.GetAllRecipes()

  try {
    const mappedRecipes = data.allRecipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      description: recipe.excerpt,
      slug: recipe.slug,
      image: recipe.featuredImage?.url,
      ingredients: ingredientListSchema.parse(recipe.ingredients),
    }))

    return recipeListSchema.parse(mappedRecipes)
  } catch (error) {
    console.error(error)
  }
}
