const Destination = require('../models/destination')

module.exports ={
    new: newDestination,
    create
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