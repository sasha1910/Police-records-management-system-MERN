const express = require('express')
const router = express.Router()

const {
getAllStation,
getStation,
updateStation,
deleteStation,
addStation
 
} = require('../controllers/StationController')

router.get("/",getAllStation)
router.get("/",getStation)
router.post("/",addStation)
router.patch('/:id',updateStation)
router.delete('/:id',deleteStation)

module.exports = router