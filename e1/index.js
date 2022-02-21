import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import productRoutes from './routes/products.js'

dotenv.config()

let app = express()

app.use(cors({ origin: 'http://localhost:8081' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080

/* app.use('/', (req, res) => {
    return res.json({ message: 'Working' })
}) */

app.use('/api/products', productRoutes)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

