import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import mainRoutes from './routes/index.js'

dotenv.config()

const port = process.env.PORT || 5001

let app = express()

app.use(cors({ origin: 'http://localhost:5001' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/', (req, res) => {
//     return res.status(200).json({
//         status: 1,
//         message: 'Welcome to my api gateway'
//     })
// })

app.use('/gate', mainRoutes)

app.listen(port, () => {
    console.log('Gateway started at port - ' + port)
})