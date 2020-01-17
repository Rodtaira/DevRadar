const {Router} = require('express')
const axios    = require('axios')
const Dev      = require('./models/Developer')
const routes = Router()

routes.post('/devs', async (req, res) => {

    const{github_username, techs, latitude, longitude} = req.body
    
     const apiResponse  = await axios.get(`https://api.github.com/users/${github_username}`)
     
     const {name = login, avatar_url, bio } = apiResponse.data

     const techsArray = techs.split(',').map(tech => tech.trim())
     
     const developer = await Dev.create({
         github_username, 
         name, 
         avatar_url, 
         bio, 
         techs: techsArray, 
     })

    return res.json(developer)
})

module.exports = routes