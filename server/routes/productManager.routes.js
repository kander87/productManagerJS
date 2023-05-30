
//const that takes in the controller file
const productManagerController = require("../controllers/productManager.controller")

//routes for each type of action you may want to do to your db
//be sure to put ALL routes with /:id in them AT THE END OF THE ROUTE LIST
//else they might eb used when you are trying to use a diff route!
//all routes call the corresponding method from the contoller file
//get methods get you info from db (think get all, get one, get random)
//post methods are used for adding or creating new entries into the db
//put method is used to updating an entry(or entries) in the db
//delete method is...wel used for deleting an entry (or entries)in the db
module.exports = function(app){
    app.get('/api/productmanager', productManagerController.getAll);
    app.post('/api/productmanager', productManagerController.createProductManager);
    app.get('/api/productmanager/:id', productManagerController.getOne)
    app.put('/api/:id/edit', productManagerController.updateOne);
    app.delete('/api/productmanager/:id', productManagerController.deleteOne);
}


// module.exports = app => {
//     app.get('/api/jokes', JokeController.findAllJokes); //returns a list of all jokes GET    
//     app.get('/api/jokes/random', JokeController.findOneRandomJoke); //returns the joke with the matching id GET
//     app.post('/api/jokes', JokeController.createNewJoke); //creates a new joke POST
//     app.get('/api/jokes/:id', JokeController.findOneSingleJoke); //returns the joke with the matching id GET
//     app.put('/api/jokes/update/:id', JokeController.updateExistingJoke); //Updates the joke with matching "_id"  PUT
//     app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke); //Removes the joke with matching "_id" DELETE
// }



