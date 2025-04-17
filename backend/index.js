//importing express
const express = require('express');
const cors = require('cors');
const UserRouter = require('./routers/userRouter');
const DoctorRouter = require('./routers/doctorRouter');
const SlotRouter = require('./routers/slotRouter');
const ReportRouter = require('./routers/reportRouter');
const TestRouter = require('./routers/testRouter');
const AppointmentRouter = require('./routers/appointmentRouter');
const PayRouter = require ('./paymentrouter/payrouter');


//initializating express
const app = express();
const port = 5000;

//middleware
app.use(cors({
   origin: '*'
}));

app.use(express.json());
app.use('/user', UserRouter);
app.use('/doctor', DoctorRouter);
app.use('/report', ReportRouter);
app.use('/slot', SlotRouter);
app.use('/appointment', AppointmentRouter);
app.use('/test', TestRouter);
app.use('/payment',PayRouter);

//accept and process request
app.get('/', (req, res) => {
   res.send('response from express');
});

//start the server
app.listen(port, () => {
   console.log('server started');
});

