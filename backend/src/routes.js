const   {Router}            =   require('express')
const   DevController       =   require('./controllers/DevController')
const   SearchController    =   require('./controllers/SearchController')

const routes = Router()

// Devs 

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store_developer)

// Search 

routes.get('/search', SearchController.index)

module.exports = routes