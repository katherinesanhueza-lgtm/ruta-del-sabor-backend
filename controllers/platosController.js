const db = require('../database/db');

exports.obtenerPlatos = (req, res) => {

    const sql = 'SELECT * FROM platos';

    db.query(sql, (err, results) => {

        if (err) {

            return res.status(500).json(err);

        }

        res.json(results);

    });

};