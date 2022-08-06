var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var products = [
{
    id: 1,
    status: true,
    com: 'jhvhjd',
    name: 'Product Details Display'
},
{
    id: 2,
    status: false,
    com: 'jhvhjd',
    name: 'First Aid'

},
{
    id: 3,
    status: true,
    com: 'jhvhjd',
    name: 'Fire Extinguisher'

},
{
    id: 4,
    status: false,
    com: 'jhvhjd',
    name: 'HR Files Display'

},
{
    id: 5,
    status: false,
    com: 'jhvhjd',
    name: 'First Aid'

}
];

var currentId = 5;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/products', function(req, res) {
    res.send({ products: products });
});

app.post('/products', function(req, res) {
    currentId++;

    products.push({
        id: currentId,
        status: req.body.check,
        com: req.body.com,
        name: req.body.n1
    
    });

    res.send('Successfully created product!');
});

app.put('/products/:id', function(req, res) {
    var id = req.params.id;
    var newName = req.body.newName;

    var found = false;

    products.forEach(function(product, index) {
        if (!found && product.id === Number(id)) {
            product.name = newName;
        }
    });
    res.send('Succesfully updated product!');
});

app.delete('/products/:id', function(req, res) {
    var id = req.params.id;

    var found = false;

    products.forEach(function(product, index) {
        if (!found && product.id === Number(id)) {
            products.splice(index, 1);
        }
    });

    res.send('Successfully deleted product!');
});

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});
