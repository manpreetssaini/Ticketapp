module.exports = {
    users: (req, res) => {
        let query = "SELECT * FROM `users` ORDER BY user_id ASC"; // query db to get all the tickets

        //executing query
        db.query(query, (err, result) => {
            if(err) {
                res.redirect('/users');
            }
            const users = result.map(res => {
                return{
                    staff: res.staff,
                    user_id: res.user_id,
                    name: res.name,
                    address: res.address,
                    telephone: res.telephone
                }
            });
            console.log(users);
            res.render('users.ejs', {
                title: "Welcome to Customer Support | View Users", 
                users: users
            });
        });
    },
};