// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
   const message =  res.json('its working')
   return message;
})




router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router