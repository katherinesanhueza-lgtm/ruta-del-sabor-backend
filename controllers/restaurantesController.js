const db = require('../database/db');

exports.obtenerRestaurantes = (req, res) => {

    const sql = 'SELECT * FROM restaurantes';

    db.query(sql, (err, results) => {

        if (err) {

            return res.status(500).json(err);

        }

        res.json(results);

    });

};

exports.obtenerRestaurantePorId = (req, res) => {

    const id = req.params.id;

    const sql = 'SELECT * FROM restaurantes WHERE id = ?';

    db.query(sql, [id], (err, results) => {

        if (err) {

            return res.status(500).json(err);

        }

        res.json(results[0]);

    });

};

exports.obtenerPlatosRestaurante = (req, res) => {

    const id = req.params.id;

    const sql = `
        SELECT * FROM platos
        WHERE restaurante_id = ?
    `;

    db.query(sql, [id], (err, results) => {

        if (err) {

            return res.status(500).json(err);

        }

        res.json(results);

    });

};