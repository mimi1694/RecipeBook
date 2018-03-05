import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import store, {me, fetchRecipes, fetchRecipesByUserID} from '../store'

/**
 * COMPONENT
 */
class UserHome extends Component {
  componentWillMount(){
    store.dispatch(me())
    store.dispatch(fetchRecipesByUserID(store.getState().user.id))
  }
  componentDidMount(){
    store.dispatch(me())
    store.dispatch(fetchRecipesByUserID(store.getState().user.id))
  }
  
  render (){
    const {email} = this.props
  
    return (
      <div>
        <h3>Welcome, {email}</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    user: state.user,
    recipes: state.recipes
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
