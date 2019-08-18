const fs = require('fs');

module.exports = {
    addTicketPage: (req, res) => {
        res.render('add-ticket.ejs', {
            title: "Welcome to Customer Suport | Create a new ticket"
            , message: ''
        });
    },
    createTicket: (req, res) => {
        if(!req.files) {
            return res.status(400).send("Ticket not created.");
        }

        let message = '';
        let ticket_id = req.body.ticket_id;
        let query = req.body.query;

        let ticket_idQuery = "SELECT * FROM `tickets` WHERE ticket_id = '" + ticket_id + "'";

        db.query(ticket_idQuery, (err, result) => {
            if(err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Ticket already exists';
                res.render('add-ticket.ejs', {
                    message,
                    title: "Welcome to Customer Support | Create a new ticket"
                });
            } else {
                // check file type before uploading it
                return res.status(500).send(err);
            }
            let query = "INSERT INTO `tickets` (user_id, date_created, comments, status) VALUES ('" + user_id + "', '" + date_created +"', '" + comments + "', '" + status + '")"';
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
            })
            res.redirect('/');
         });
    },
    editTicketPage: (req,res) => {
        let ticket_id = req.params.id;
        let query = "SELECT * FROM `tickets` WHERE id = '" + ticket_id + "' ";
        db.query(query, (err, result) => {
            if(err) {
                return res.status(500).send(err);
            }
            res.render('edit-ticket.ejs', {
                title: "Edit Ticket",
                ticket: result[0],
                message: ''
            });
        });
    },
    
    editTicket: (req, res) => {
        let user_id = req.params.id;
        let date_created = req.body.date_created;
        let comments = req.body.comments;
        let status = req.body.response;

        let query = " UPDATE `tickets` SET `user_id` = '" + user_id + "', `date_create` = '" + date_created + "', `comments` = '" + comments + "', `status` = '" + status + "'";
          db.query(query, (err, result) => {
              if(err) {
                  return res.status(500).send(err);
              }
              res.redirect('/');
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
