const PatientModel = require('../models/patient.model');
exports.getPatientList = (req, res) => {
    PatientModel.getAllPatients((err, patients) => {
        console.log('Here');
        if (err)
            res.send(err);
        console.log('Patients', patients);
        res.send(patients);
    })
}

exports.getPatientByID = (req, res) => {
    PatientModel.getPatientByID(req.params.id, (err, patient) => {
        if (err)
            res.send(err);
        console.log('Patient data', patient);
        res.send(patient);

    })
}

exports.createNewPatient = (req, res) => {
  
    const patientReqData = new PatientModel(req.body);
    console.log('patientReqData', patientReqData);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: ' Fill all data' });
    }
    else {
        PatientModel.createPatient(patientReqData, (err, patient) => {
            if (err) 
                res.send(err);
                res.json({ status: true, message: ' Success ', data: patient.insertId })
           
        })
    }
}
exports.updatePatient = (req,res) => {
    const patientReqData = new PatientModel(req.body);
    console.log('Update', patientReqData);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Fill all fields' });
    }
    else {
        PatientModel.updatePatient(req.params.id, patientReqData, (err, patient) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: ' Updated ' })
        })
    }
}
exports.deletePatient = (req, res) => {
    PatientModel.deletePatient(req.params.id, (err, patient) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Success' });
    })
}
