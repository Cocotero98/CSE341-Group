const routes = require('express').Router();

const professionalController = require('../controllers/professionalController');


routes.get('/', professionalController.getData);

module.exports = routes;