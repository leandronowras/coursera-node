const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json())

promoRouter.route('/')
.all((req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('30% to 90% off')
})

.post((req, res) => {
    res.end('Will add the product: ' + req.body.product + ' with the discount: ' + req.body.discount);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /promotions');
})

.delete((req, res) => {
    res.end('Deleting all the promotions to you');
})



promoRouter.route('/:promoId')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Get promo ' + req.params.promoId)
})
.post((req, res) => {
    res.status(403)
    res.end('POST operation in this route not supported')
})
.put((req, res) => {
    res.end('Updated promotion ' + req.params.promoId + ' with new discount of ' + req.body.discount)
})
.delete((req, res) => {
    res.end('Deleted promotion ' + req.params.promoId)
})



module.exports = promoRouter;