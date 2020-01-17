const Dev                   =   require('../models/Developer')
const parseStringAsArray    =   require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res){
        // Search for all devs in a radius of 10 km 
        // Filter per techs  

        const {latitude, longitude, techs} = req.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs:{
                $in: techsArray
            }, 
            location: {
                $near:{
                    $geometry:{
                        type: 'Point', 
                        coordinates:[longitude, latitude],
                        $nextDistance: 10000 

                    }
                }
            }
        })

        return res.json({devs})

    }
}