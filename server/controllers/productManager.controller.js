
//this pulls the productmanager model into the controller
const {ProductManager} = require('../models/productManager.model');

//this is one "get all" method which calls the model and uses the find function
//built into mongoDB, and stores the results in json readable format
//and catches any errors at the end if necessary
module.exports.getAll = (request, response) => {
    ProductManager.find({})
    .then(results => response.json(results))
    .catch(err => response.json(err));
}

//this is one "create" method that uses a try method
//it makes a constant var for the new productmanager based on what is in the body of the form
//of the form and puts it in as a request to the db to save the results using the save func in mongodb
//then takes those results and puts them into json readable format
//and catches any errors if necessary
module.exports.createProductManager = async (request, response) => {
    try {
    const newProduct = new ProductManager(request.body)
    const results = await newProduct.save()
    response.json(results)
    } catch (err){
        response.status(400).json(err)
    }
}

//one "getOne" method which allows us to take in a paramater of id
//uses the find by id func built in to pull one result
//then store those results in json readable format
//else catches the error
module.exports.getOne = (req, res) => {
    ProductManager.findById({ _id: req.params.id })
        .then(results => {
            return res.json(results)
        })
        .catch(err => {
            return res.json(err)
        })
}

// an update on example that will update one object fromt he db based on the id
module.exports.updateOne = (req, res) => {
    ProductManager.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
        .then(results => {
            return res.json(results)
        })
        .catch(err => {
            return res.json(err)
        })
    }

    // a delete one example that will delete one object from the database by the id
    module.exports.deleteOne = (req, res) => {
        ProductManager.deleteOne({ _id: req.params.id })
            .then(deletedProductManager => {
                return res.json(deletedProductManager)
            })
            .catch(err => {
                return res.json(err)
            })
    }


    //another create method that does not use the asynch and try functions
    // module.exports.create = (req, res) => {
//     ProductManager.create(req.body)
//         .then(newProductManager => {
//             return res.json(newProductManager)
//         }).catch(err => {
//             return res.json(err)
//         })
// }

//another example that uses the .then method instead of constants
// module.exports.getAll = (req, res) => {
//     ProductManager.find({})
//         .then(allProductManagers => {
//             return res.json(allProductManagers)
//         })
//         .catch(err => {
//             return res.json(err)
//         })
// }




// a method that will get you a random object from the database
//using mthe length of the db times the random function to get a number greater than 0-1
//(math.random picks a random number between 0 and 1)
//then uses math.floor to make sure you dont have a decimal number
// module.exports.random = (req, res) => {
//     ProductManager.find({})
//         .then(allProductManagers => {
//             return res.json(allProductManagers[Math.floor(Math.random() * allProductManagers.length)])
//         }).catch(err => {
//             return res.json(err)
//         })
// }






