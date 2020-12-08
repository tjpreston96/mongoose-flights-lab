const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ticketSchema = new Schema({
    seat: {type:String, match: /[A-F][1-9]\d?/},
    price: {type:Number, min: 0}
}, {
    timestamps: true
})
const flightSchema = new Schema({
    airline: {type:String, enum:['American', 'Southwest', 'United']},
    airport:{type: String, enum:['DEN', 'DFW', 'AUS', 'ABQ', 'ORD'], default:'DEN'},
    flightNo: {type:Number, required: true, min: 10, max: 9999},
    departs: {
        type: Date, 
        default: () => Date.now() + 365 * 24 * 60 * 60 * 1000 
        // + 365 days * hours * minutes * seconds * milliseconds
         },
    tickets: [ticketSchema],
    destination: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
}, {
    timestamps: true
})
module.exports = mongoose.model('Flight', flightSchema)