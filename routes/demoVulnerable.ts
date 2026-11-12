const express = require('express')

const router = express.Router()

router.get('/demo', (req, res) => {
    const expression = String(req.query.expression || '')

    // VULNERABILIDAD INTENCIONAL PARA LA PRUEBA SAST
    const result = eval(expression)

    res.json({ result })
})

module.exports = router
