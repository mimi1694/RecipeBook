const db = require('../server/db')
const {User, Recipe} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'mimi@email.com', password: '123'}),
    User.create({email: 'scott@email.com', password: '123'})
  ])
  const recipes = await Promise.all([
    Recipe.create({
      name: 'Mac & Cheese',
      ingredients: 'macaroni, cheddar cheese, milk, salt, pepper',
      directions: 'Bring water to a boil./ Add macaroni and cook for 10 minutes./ Drain./ Add milk & cheese./ Stir until creamy./ Salt & pepper to taste',
      imageUrl: '../public/macnchz.jpeg'
    })
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${recipes.length} recipes`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
