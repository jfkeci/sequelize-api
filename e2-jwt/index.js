import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'

dotenv.config()

let app = express()

app.use(cors({ origin: 'http://localhost:5001' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5001

/* app.use('/', (req, res) => {
    return res.json({ message: 'Working' })
}) */

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

