const axios    = require('axios')
const Dev      = require('../models/Developer')

module.exports = {

    async index(req, res){
        const devs = await Dev.find()
        return res.json(devs)
    }, 

    async store_developer (req, res) {

        const{github_username, techs, latitude, longitude} = req.body

        let developer = Dev.findOne({github_username})

        if(!developer){

            const apiResponse  = await axios.get(`https://api.github.com/users/${github_username}`)
         
            const {name = login, avatar_url, bio } = apiResponse.data
        
            const techsArray = techs.split(',').map(tech => tech.trim())
        
            const location = {
                type: 'Point', 
                coordinates: [longitude, latitude]
            }
            
             developer = await Dev.create({
                github_username, 
                name, 
                avatar_url, 
                bio, 
                techs: techsArray, 
                location
            })

            return res.json(developer)
        }

        return res.json({message : "User already registered"})
        
         
    
        
    }
}