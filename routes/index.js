module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `tickets` ORDER BY id ASC"; // query db to get all the tickets

        //executing query
        db.query(query, (err, result) => {
            if(err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Customer Support | View Tickets"
                , tickets: result
            });
        });
    },
};