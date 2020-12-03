const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create
}

function newFlight(req, res){
    res.render('/flights/new')
}

function create(req, res) {
    const flight = newFlight(req.body)
    flight.save(function(err){
        if(err){
            console.log(err)
            return res.render('flights/new', {err: err})
        }
        console.log(flight)
        res.redirect('/movies')
    });
}