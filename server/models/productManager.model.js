
//requires mongoose to connec to the db
//creates a new schema in the db that takes in whichever things oyu want
// you must specify the data type
//validations are highly suggested and can use the parameters 
//you put in for the actual warning message
//finally you make a timestamp for when the item was made/updated
//and then export the model schema
const mongoose = require('mongoose');
const ProductManagerSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} must be at least {MINLENGTH} characters!"]
    },
    price: { type: Number,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} must be at least {MINLENGTH} characters!"] 
    },
    description: {type: String,
        required: [true, "{PATH} is required"],
        minlength: [10, "{PATH} must be at least {MINLENGTH} characters!"]
    }
}, { timestamps: true });
module.exports.ProductManager = mongoose.model('ProductManager', ProductManagerSchema);

