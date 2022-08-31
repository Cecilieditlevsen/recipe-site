import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  title: string
  image: string
  id: string
}

const Recipe = ({ title, image, id }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Link href={`/recipes/${id}`}>
      <a className="group">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={image}
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
        <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      </a>
    </Link>
  )
}

export default Recipe
