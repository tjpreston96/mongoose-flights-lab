const Flight = require('../models/flight');

module.exports = {
  create,
  delete: deleteTicket
};


function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.tickets.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  };

function deleteTicket(req, res) {
    Flight.findById(req.params.flightId)
    .then((flight)=>{
        const idx = flight.tickets.findIndex(ticket => ticket._id == req.params.ticketId)
        flight.tickets.splice(idx, 1) 
        flight.save()
        .then(()=>{
            res.redirect(`/flights/${flight._id}`)
        })
    })
}