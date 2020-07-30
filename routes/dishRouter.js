const express = require('express');
const bodyParser = require('express');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next()
})

.get((req, res) => {
    res.end('Will send all the dishes to you!')
})

.post((req, res) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /dishes');
})

.delete((req, res) => {
    res.end('Deleting all the dishes to you');
})

 

dishRouter.route('/:dishId')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Get dish ' + req.params.dishId)
})
.post((req, res) => {
    res.status(403)
    res.end('POST operation in this route not supported')
})
.put((req, res) => {
    res.end('Updated dish ' + req.params.dishId + ' with the dish ' + req.body.name)
})
.delete((req, res) => {
    res.end('Deleted dish ' + req.params.dishId)
})



module.exports = dishRouter;