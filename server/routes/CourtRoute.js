const express = require('express')
const router = express.Router()

const {
getAllCourt,
getCourt,
updateCourt,
deleteCourt,
addCourt
 
} = require('../controllers/CourtController')

router.get("/",getAllCourt)
router.get("/",getCourt)
router.post("/",addCourt)
router.patch('/:id',updateCourt)
router.delete('/:id',deleteCourt)

module.exports = router