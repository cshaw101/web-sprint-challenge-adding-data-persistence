// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
   const message =  res.json('resource router is working')
   return message;
})

router.post('/', (req, res, next) => {
    return res.json('Resource Post is working properly')
})




router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router