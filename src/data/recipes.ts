type Recipe = {
    id: string
    title: string
    description: string
    image: string
}

const createRecipe = (input: Recipe) => input

export const findRecipe = (id: Recipe['id']) =>
    recipes.find((recipe) => recipe.id === id)

const lasagna = createRecipe({
    id: 'lasagna',
    title: 'Lasagne',
    description: 'Lasagne er godt',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80'
})

const frikadeller = createRecipe({
    id: 'frikadeller',
    title: 'Frikadeller',
    description: 'Frikadeller er godt',
    image: 'https://images.unsplash.com/photo-1615385361723-9f4c2daf42f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
})

const shin = createRecipe({
    id: 'shin-ramyun',
    title: 'Shin Ramyun',
    description: 'Shin Ramyun er godt',
    image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
})

const millionboef = createRecipe({
    id: 'millionboef',
    title: 'Millionbøf',
    description: 'Millionbøf er godt',
    image: 'https://images.arla.com/recordid/54cca3456ccf44b088adaa24008111ef/millionbof.jpg?crop=(0,179,0,-644)&w=1200&h=630&scale=both&format=jpg&quality=80&ak=6826258c&hm=dee02105'
})

export const recipes: Recipe[] = [lasagna, frikadeller, shin, millionboef]