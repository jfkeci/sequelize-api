import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

let app = express()

app.use(cors({ origin: 'http://localhost:8081' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080

app.use('/', (req, res) => {
    return res.json({ message: 'Working' })
})

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

