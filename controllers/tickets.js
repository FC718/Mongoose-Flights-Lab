const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    res.render('tickets/new', {
        flightId: req.params.id,
        title: 'Add Ticket',
    })
}

function create(req, res) {
    const ticket = req.body;
    ticket.flight = req.params.id;
    Ticket.create(ticket, function(err, ticket) {
        console.log(ticket);
        res.redirect(`/flights/${req.params.id}`);
    })
}
