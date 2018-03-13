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
    
    return (
      <div>
          <h3>My recipes:</h3>
          <ul>
            {
              recipes.length ?
              recipes.map(recipe => {
                return (<li key={recipe.id}>{recipe.name}</li>)
              })
              : <h5>No recipes to show</h5>
            }
          </ul>
          
          <div id="add-recipe-form">
            New Recipe:
            <form>
              Name:
              <input type="text" name="recipename"/>
              Ingredients:
              <input type="text" name="ingredient"/>
              Image URL:
              <input type="text" name="image"/>
            </form>
          </div>
          
      </div>
    )
  }
}

const UserRecipesContainer = connect(mapState, mapDispatch)(UserRecipes)
export default withRouter(UserRecipesContainer)
