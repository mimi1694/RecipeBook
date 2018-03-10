import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import store, {me, fetchRecipes, fetchRecipesByUserID} from '../store'

const mapState = (state) => {
  return {
    user: state.user,
    recipes: state.recipes
  }
}
const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch(fetchRecipesByUserID(store.getState().user.id))
    }
  }
}

class UserRecipes extends Component {
  
  componentWillMount(){
    store.dispatch(fetchRecipesByUserID(this.props.user.id))
    .then(()=>{console.log(store.getState())})
  }
  
  render (){
    const recipes = this.props.recipes
    let showForm = false
    return (
      <div>
          <h3>My recipes:</h3>
          <ul>
            {
              recipes.length && recipes.map(recipe => {
                return (<li key={recipe.id}>{recipe.name}</li>)
              })
            }
          </ul>
          <button onClick={
            evt => {
              evt.preventDefault()
              showForm = true
            }
          }
          >Add Recipe</button>
          {
            showForm &&
            <div id="add-recipe-form">
              <form>
                Name:
                <input type="text" name="recipename"/>
                Ingredients:
                <input type="text" name="ingredient"/>
              </form>
            </div>
          }
      </div>
    )
  }
}

const UserRecipesContainer = connect(mapState, mapDispatch)(UserRecipes)
export default withRouter(UserRecipesContainer)
