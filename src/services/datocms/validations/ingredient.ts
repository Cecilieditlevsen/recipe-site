import { z } from 'zod'

export const ingredientSchema = z.object({
  title: z.string(),
  unit: z.string(),
  quantity: z.number().nullable(),
  id: z.string(),
})

export const ingredientListSchema = z.array(ingredientSchema)

export type Ingredient = z.infer<typeof ingredientSchema>
export type IngredientList = z.infer<typeof ingredientListSchema>
