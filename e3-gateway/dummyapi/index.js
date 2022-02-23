import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const port = process.env.PORT || 5002

let app = express()

app.use(cors({ origin: 'http://localhost:5002' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req, res) => {
    return res.status(200).json({
        status: 1,
        message: 'Welcome to my dummy api'
    })
})


app.listen(port, () => {
    console.log('Gateway started at port - ' + port)
})