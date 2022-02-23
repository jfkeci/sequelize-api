import express from 'express'

const router = express.Router()

router.all('/:api', (req, res) => {
    res.status(200).json({
        status: 1,
        api: req.params.api,
        message: 'Hello from api'
    })
})

export default router