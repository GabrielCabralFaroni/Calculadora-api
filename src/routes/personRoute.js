const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculadoraController')


router.post('/multiplicar/:numero1/:numero2', controller.multiplicar);
router.post('/divisao/:numero1/:numero2', controller.divisao);
router.post('/soma/:numero1/:numero2', controller.soma);
router.post('/subtracao/:numero1/:numero2', controller.subtracao);
router.post('/desafio/:pessoa', controller.desafio);
router.post('/api/users', controller.api);



module.exports = router;