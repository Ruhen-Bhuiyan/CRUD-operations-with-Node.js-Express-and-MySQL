var databaseConn = require('../database.config');
var Patient = function(patient){
    this.first_name = patient.first_name;
    this.last_name = patient.last_name;
    this.phone = patient.phone;
    this.number_of_vaccine = patient.number_of_vaccine;
}

Patient.getAllPatients = (result) => {
    databaseConn.query('SELECT * FROM patients', (err, res) => {
        if (err) {
            console.log('Error', err);
            result(null, err);
        }
        else {
            console.log('Succ');
            result(null, res);
        }
    })
}
Patient.getPatientByID = (id, result) => {
    databaseConn.query('SELECT * FROM patients WHERE id = ?', id, (err, res) => {
        if(err) {
            console.log('Error', err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}

Patient.createPatient = (patientReqData, result)=>{
    databaseConn.query('INSERT INTO patients SET? ', patientReqData, (err, res) => {
        if (err) {
            console.log('Error');
            result(null, err);
        }
        else {
            console.log('Success');
            result(null, res)
        }
    })
}
Patient.updatePatient = (id, patientReqData, result) => {
    databaseConn.query("Update patients SET first_name=?,last_name=?,phone=?,number_of_vaccine=? WHERE id=?",[patientReqData.first_name, patientReqData.last_name,patientReqData.phone,patientReqData.number_of_vaccine, id], (err, res) => {
        if (err) {
            console.log('Error');
            result(null, err);
        }
        else {
            console.log('Updated successfully');
            result(null, res);
        }
    })
}
Patient.deletePatient = (id, result) => {
    databaseConn.query('DELETE FROM patients WHERE id = ?', [id], (err, res) => {
        if (err) {
            console.log('Error');
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}
module.exports = Patient;
