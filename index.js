const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
	res.send('Hello World!');
});
const patientRoutes = require('./routes/patient.route');
app.use('/api/vi/patient', patientRoutes);
app.listen(port, () => {
	console.log(`Example app listening at ${port}`);
});

