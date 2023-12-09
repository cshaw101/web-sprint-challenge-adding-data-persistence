// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('../task/model')

router.get('/', (req, res, next) => {
   const message =  res.json('task router is working')
   return message;
})

router.post('/', (req, res, next) => {
    return res.json('task Post is working properly')
})




router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router