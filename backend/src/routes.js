const   {Router}            =   require('express')
const   DevController       =   require('./controllers/DevController')
const   SearchController    =   require('./controllers/SearchController')

const routes = Router()

// Devs 

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store_developer)
routes.patch('/devs/:id', DevController.update)
routes.delete('/devs/:id', DevController.destroy)

// Search 

routes.get('/search', SearchController.index)

module.exports = routes