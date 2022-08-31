import Recipe from "../components/recipe";
import { recipes } from "../data/recipes";

const Recipes = () => {
  return (
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid gap-y-10 grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            ))}
          </div>
        </div>
  );
};

export default Recipes;
