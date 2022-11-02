import { z } from 'zod'

export const recipePreviewSchema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().min(1).max(200),
})

export const recipeSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(200),
})

export const recipeListSchema = z.array(recipeSchema)

export type Recipe = z.infer<typeof recipeSchema>
export type RecipePreview = z.infer<typeof recipePreviewSchema>
export type RecipeList = z.infer<typeof recipeListSchema>
