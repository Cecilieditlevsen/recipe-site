import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import type { Recipe as RecipeType } from '@services/datocms/validations/recipe'

export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  recipe: RecipeType
}

export const Recipe = ({ recipe }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Link href={`/recipes/${recipe.slug}`}>
      <a className="group">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={recipe.image}
            layout="fill"
            objectFit="cover"
            objectPosition={'center'}
            alt=""
            className={cn(
              'group-hover:opacity-75 duration-700 ease-in-out',
              isLoading
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{recipe?.title}</h3>
      </a>
    </Link>
  )
}
