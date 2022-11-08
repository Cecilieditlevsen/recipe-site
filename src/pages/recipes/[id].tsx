import Link from 'next/link'
import { datocmsService } from '@services/datocms'
import { cn } from '@components/recipe'
import { InferGetStaticPropsType } from 'next'
import { GetStaticPathsContext } from "next"
import Image from 'next/image'
import {useState} from "react";

export const getStaticPaths = async () => {
  const recipes = await datocmsService.getAllRecipes()


  const paths = recipes?.map((recipe) => {
    return {
      params: { id: recipe.slug.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id

  const data = await datocmsService.getSingleRecipe({ slug: id })

  console.log(data)
  return {
    props: { recipe: data },
  }
}

const Recipe = ({ recipe }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      <div className="min-h-screen bg-amber-50">
        <h1>
          =
          <Link href="/">
            <a>Back</a>
          </Link>
        </h1>

        <div className="w-100 flex justify-center mb-6">
          <h1 className="font-bold text-2xl font-">{recipe && recipe.title}</h1>
        </div>

        <div className="max-w-screen-xl mx-auto aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-6 xl:aspect-h-2">
          {recipe?.image ? (
            <Image
              layout={'fill'}
              src={recipe.image}
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
          ) : (
            <div>no image</div>
          )}
        </div>

        <div className="w-100 flex justify-center">
          <div className="w-100 lg:w-[1200px] bg-amber-100 mx-4 mt-8 p-10 shadow-sm ">
            <div className="flex justify-center">
              <h1 className="text-xl">{recipe && recipe.description}</h1>
            </div>

            <div className="flex flex-col md:flex-row mt-8">
              <div className="flex flex-col justify-center md:justify-start md:flex-1">
                <h1 className="font-bold">Ingredienser</h1>
               <ul>
                 {recipe?.ingredients.map((ingredient) => (
                     <li key={ingredient.id}>{ingredient.title}</li>
                 ))}
               </ul>
              </div>

              <div className="flex flex-col md:flex-1 mt-8 md:mt-0">
                <h1 className="font-bold">Fremgangsmåde</h1>
                <div className="mt-2">
                  <p>
                    Commodi laudantium veniam reiciendis vero. Et maiores eos
                    esse tenetur et qui enim. Quo iste quia voluptatem vel modi
                    eum omnis voluptas reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe
