const Flight = require('../models/flight')
const Destination = require('../models/destination')

module.exports = {
    new: newFlight,
    create,
    index,
    show
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
        if(err) return res.redirect('/flights/new')
        res.redirect(`/flights/${flight._id}`)
    });
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'All Flights', flights})
    })
}

function show(req,res){
    Flight.findById(req.params.id)
    .populate('airport').exec(function(err, flight){
        Destination.find({_id: {$nin: flight.airport}}, function(err, destinations){
            console.log(destinations)
            res.render('flights/show', {title: 'Flight Details', flight, destinations})
        })
    })
}
// function show(req, res){
//     Flight.findById(req.params.id)
//         .populate('airport')
//         .then((flight) => {
//         res.render('flights/show', {title: 'Flight Detail', flight})
//     })
//     .catch((err) => {
//      console.log(err)   
//     })
// }