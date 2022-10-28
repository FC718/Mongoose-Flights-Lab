const mongoose = require('mongoose');

// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// THIS IS HOW YOU START ENTERING DATA "SCHEMA"
// FOLLOW THIS ROUTINE
// You first have to define variables to use them.

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
        },
    arrival: {
        type: Date,
        default: function() {
            let today = new Date();
            return today.setFullYear(today.getFullYear()+1);
        }
    },
    }) 



const flightSchema = new Schema({
airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
},
airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
},
flightNo: {
    type:Number,
    min:10,
    max:9999
},
departs: {
    type: Date,
    default: function() {
        let today = new Date();
        return today.setFullYear(today.getFullYear()+1);
    }
},


destinations: [destinationSchema]
})


module.exports = mongoose.model('Flights', flightSchema);