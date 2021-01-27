const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
router.get('/', patientController.getPatientList);
router.get('/:id', patientController.getPatientByID);
router.post('/', patientController.createNewPatient);
router.put('/:id', patientController.updatePatient);

router.delete('/:id', patientController.deletePatient);
module.exports = router;
