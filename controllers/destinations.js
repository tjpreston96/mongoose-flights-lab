const Destination = require('../models/destination')

module.exports ={
    new: newDestination,
    create,
    addToAirport
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