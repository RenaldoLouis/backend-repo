const express = require('express')
const bodyParser = require('body-parser')
const ErrorHandler = require("./src/middlewares/ErrorHandlerMiddleware.js")
const attendanceRoute = require('./src/routes/AttendanceRoutes.js')
const userRoute = require('./src/routes/UserRoute.js')
const { getFirestore } = require("firebase-admin/firestore");
var cors = require('cors')

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(ErrorHandler)

app.use('/api/v1/users', userRoute)
// app.use('/api/v1/attendenceService', attendanceRoute)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
