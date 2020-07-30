const express = require('express');
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next()
})

.get((req, res) => {
    res.end('These are the leaders')
})

.post((req, res) => {
    res.end('Will add the leader: ' + req.body.leader + ' with description: ' + req.body.description);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /leaders');
})

.delete((req, res) => {
    res.end('Deleting all the leaders to you');
})



leaderRouter.route('/:leaderId')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Get leader ' + req.params.leaderId)
})
.post((req, res) => {
    res.status(403)
    res.end('POST operation in this route not supported')
})
.put((req, res) => {
    res.end('Updated leader ' + req.params.leaderId + ' with the name ' + req.body.name)
})
.delete((req, res) => {
    res.end('Deleted leader ' + req.params.leaderId)
})



module.exports = leaderRouter;