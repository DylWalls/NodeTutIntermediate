exports.validateProduct = (req, res, next) => {
    const data = req.body;
    if(
    (data.hasOwnProperty('name') && typeof(data.name) === 'string') &&
    (data.hasOwnProperty('description') && typeof(data.description) === 'string') &&
    (data.hasOwnProperty('category') && typeof(data.category) === 'string') &&
    (data.hasOwnProperty('price') && typeof(data.price) === 'number')
    ){
    return next();
    }else{
    return res.status(400).send({error: 'Missing required properties.'});
    }
}