import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const GET_RECIPES = 'GET_RECIPES'
const GET_ONE_RECIPE = 'GET_ONE_RECIPE'
const GET_RECIPES_BY_ID = 'GET_RECIPES_BY_ID'

/**
 * INITIAL STATE
 */
const defaultRecipes = {}

/**
 * ACTION CREATORS
 */
const getRecipes = recipes => ({type: GET_RECIPES, recipes})
const getOneRecipe = recipe => ({type: GET_ONE_RECIPE, recipe})
const getRecipesByID = recipes => ({type: GET_RECIPES_BY_ID, recipes})
/**
 * THUNK CREATORS
 */
export const fetchRecipes = () => 
    dispatch =>
        axios.get('/api/recipes')
        .then(res => 
            dispatch(getRecipes(res.data)))
        .catch(err => console.log(err))
export const fetchOneRecipe = (recipeID) =>
    dispatch =>
        axios.get(`/api/recipes/${recipeID}`)
        .then(res =>
            dispatch(getOneRecipe(res.data)))
        .catch(err => console.log(err))
export const fetchRecipesByUserID = (userID) =>
    dispatch =>
        axios.get(`/api/recipes/${userID}`)
        .then(res =>
            dispatch(getRecipesByID(res.data)))
        .catch(err => console.log(err))
/**
 * REDUCER
 */
export default function (state = defaultRecipes, action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes
    case GET_ONE_RECIPE:
      return action.recipe
    case GET_RECIPES_BY_ID:
        return action.recipes
    default:
      return state
  }
}