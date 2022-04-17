const express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const app = express();

const port = 3434;

app.post('/sumProduct', jsonParser, (req, res) => {
    const listProduct = req.body.listProduct;
    const sum = listProduct.reduce((partialSum, a) => partialSum + a, 0);
    res.status(200).json({ sum });
})

app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});