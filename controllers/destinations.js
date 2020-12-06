const Destination = require('../models/destination');
const { deleteOne } = require('../models/flight');
const Flight = require('../models/flight')

module.exports ={
    new: newDestination,
    create,
    addToAirport,
    delete: deleteDestination
}

function newDestination(req,res){
    Destination.find({}, function(err, destinations) {
        res.render('destinations/new', {title: 'Add Destination', destinations});
      })
}

function create(req, res) {
    Destination.create(req.body, function(err, destination){
        res.redirect('/destinations/new')
    })
}

function addToAirport(req,res){
    Flight.findById(req.params.id, function(err, flight){
        flight.airport.push(req.body.destinationId)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function deleteDestination(req, res){

}