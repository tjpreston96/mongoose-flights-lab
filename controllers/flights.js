const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res){
    res.render('flights/new')
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err){
        if(err){
            console.log(err)
            return res.render('flights/new', {err: err})
        }
        console.log(flight)
        res.redirect('/flights')
    });
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights: flights})
    })
}