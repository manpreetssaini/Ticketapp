module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `tickets` ORDER BY ticket_id ASC"; // query db to get all the tickets

        //executing query
        db.query(query, (err, result) => {
            if(err) {
                res.redirect('/');
            }
            const tickets = result.map(res => {
                return{
                    ticket_id: res.ticket_id,
                    user_id: res.user_id,
                    date_created: res.date_created,
                    comments: res.comments,
                    status: res.status
                }
            });
            res.render('index.ejs', {
                title: "Welcome to Customer Support | View Tickets", 
                tickets: tickets
            });
        });
    },
};