const User = require('./user')
const Recipe = require('./recipe')

Recipe.belongsTo(User)
User.hasMany(Recipe)

module.exports = {
  User,
  Recipe
}
