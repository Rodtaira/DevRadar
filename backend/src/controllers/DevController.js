const axios                 =   require('axios')
const Dev                   =   require('../models/Developer')
const parseStringAsArray    =   require('../utils/parseStringAsArray')

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
        
            const techsArray = parseStringAsArray(techs)
        
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
         
    }, 

    async update(req, res){

        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'bio', 'location']
        const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update) )

        if(!isValidOperation){
            return res.status(400).send({error: 'Invalid updates'})
        }

 
        const developer = await Dev.findById(req.params.id)

        updates.forEach((update) => dev[update] = req.body[update])

        await developer.save()

        if (!developer) {
            return res.status(404).send()
        }

        res.send(developer)


    }, 

    async destroy(req, res){
        
            const developer = await Dev.findByIdAndDelete(req.params.id)
    
            if(!developer){
                return res.status(404).send('Developer not found')
            }
    
            res.json(developer)
    
        
    }
  
}