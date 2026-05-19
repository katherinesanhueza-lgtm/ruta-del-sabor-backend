const express = require('express');

const cors = require('cors');

const app = express();

const port = 3000;

app.use(cors());

app.use(express.json());

const restaurantesRoutes =
require('./routes/restaurantesRoutes');

const platosRoutes =
require('./routes/platosRoutes');

app.use('/api/restaurantes',
restaurantesRoutes);

app.use('/api/platos',
platosRoutes);

app.get('/', (req, res) => {

    res.send('API Ruta del Sabor funcionando');

});

app.listen(port, () => {

    console.log(`Servidor corriendo en http://localhost:${port}`);

});