import { z } from 'zod'
import { ingredientSchema } from '@services/datocms/validations/ingredient'

export const recipePreviewSchema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().min(1).max(200),
  slug: z.string().min(1),
})

export const recipeSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(200),
  slug: z.string().min(1),
  image: z.string(),
  ingredients: z.array(ingredientSchema),
})

export const recipeListSchema = z.array(recipeSchema)

export type Recipe = z.infer<typeof recipeSchema>
export type RecipePreview = z.infer<typeof recipePreviewSchema>
export type RecipeList = z.infer<typeof recipeListSchema>
