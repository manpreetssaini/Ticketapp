const fs = require('fs');

module.exports = {
    deleteTicket: (req, res) => {
        res.render('index.ejs', {
            title: "Welcome to Customer Suport | Create a new ticket"
            , message: ''
        });
    },

  deleteTicket: (req,res) => {
    let ticket_id = req.params.id;
    let deleteTicketQuery = 'DELETE FROM tickets WHERE id = "' + ticket_id + '"';

    db.query(deleteTicketQuery, (err, result) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
}
};
