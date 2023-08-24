const express = require('express');
const router = express.Router();
const getAppointmentsController = require('../controllers/getAppointmentsController');
const createAppointmentController = require('../controllers/createAppointmentController');
const getAvailableTimesController = require('../controllers/getAvailableTimesController');

router.get('/appointments', getAppointmentsController.getAppointments);
router.post('/appointments', createAppointmentController.createAppointment);
router.get('/available-times', getAvailableTimesController.getAvailableTimes);

module.exports = router;
