const express = require('express');
const Property = require('../models/Property');
const Listing = require('../models/Listing');


const router = express.Router()


/**
 * Get all properties
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */

router.post('/listings', async (req, res) => {
   
    // get the bound range from the request body or set it to a default value
    const bound = req?.body?.bound || '29.072427521711962,41.139992421792506,28.994681087834543,40.90447301261282';
   
    let data; // declare a variable to store the data

    try { 

        // check if the bound is available
        if(bound != 'undefined'){

            // convert the bound to an array
            const boundToArray = bound?.split(',');
            
            // create a box from the bound
            const box =   [
                [
                    boundToArray[0], // latitude
                    boundToArray[1] // longitude
                ],
                [
                    boundToArray[2], // latitude
                    boundToArray[3] // longitude 
                ]
            ]
            
            // get the properties within the bound
            data = await Listing.find({"address.location.coordinates" : {"$within" : {"$box" : box}}}).limit(100);
        }
        // if the bound is not available, get all the properties
        else {

            // get all the properties
            data = await Listing.find().limit(100);
        }
        
        // return the data
        res.json(data)
    }
    catch(error){

        // return the error message
        res.status(500).json({message: error.message})
    }
})




module.exports = router;