const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController.js')

module.exports = () => {
    router.get('/', homeController.mostrarMedicamentos)

    return router
}