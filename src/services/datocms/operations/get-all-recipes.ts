import { datocmsClient } from '@services/datocms/client'

export async function getAllRecipes() {
  const data = await datocmsClient.GetAllRecipes()

  return data.allRecipes
}
