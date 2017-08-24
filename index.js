const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = require('./config');
const pc = require('./products_controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(connectionString).then(db => {
    app.set('db', db);
});

app.get('/api/products', pc.getAll);
app.get('/api/product/:id', pc.getOne);
app.put('/api/product/:id', pc.update);
app.post('/api/product', pc.create);
app.delete('/api/product/:id', pc.delete);

const port = 3000;
app.listen(port, console.log(`It's lit on port ${port} fam!`));