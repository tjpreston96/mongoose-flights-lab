const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res){
    res.render('flights/new', {title: 'Add Flight'})
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
      }

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
        res.render('flights/index', {title: 'All Flights', flights})
    })
}