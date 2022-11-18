const express = require('express')
const router = express.Router()

const {
    getAllPolice,
    addPolice,
    getPolice,
    updatePolice ,
    deletePolice,
 
} = require('../controllers/PoliceController')

router.route('/').get(getAllPolice).post(addPolice)
router.route('/:id').get(getPolice).patch(updatePolice).delete(deletePolice)

module.exports = router