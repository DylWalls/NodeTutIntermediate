const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const { validateProduct } = require('./middleware/products-validation');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(3000, function() {
    console.log("Server started! Listening on port 3000.");
});

app.get('/api/products/', (req, res) => {
    const products = repoContext.products.findAllProducts();
    return res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = repoContext.products.findProductById(id);
    return res.send(product);
   });

app.post('/api/products', [validateProduct], (req, res) => {
    const newProduct = req.body;
    const addedProduct = repoContext.products.createProduct(newProduct);
    return res.send(addedProduct);
   });

app.put('/api/products/:id', [validateProduct], (req, res) => {
    const id = req.params.id;
    const productPropertiesToUpdate = req.body;
    const updatedProduct = repoContext.products.updateProduct(id, productPropertiesToUpdate);
    return res.send(updatedProduct)
   });
   
app.delete('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const updatedDataSet = repoContext.products.deleteProduct(id);
    return res.send(updatedDataSet);
   });