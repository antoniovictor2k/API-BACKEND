const express = require('express');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {

    res.send('Router get funcionando');
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    res.send(`get id: ${id}`);
})

router.get('/matricula/:matricula', (req, res) => {

    res.send(`get matricula: ${req.params.matricula}`);
})
router.put('/:id', (req, res) => { // atualizar

    res.send(`PUT id: ${JSON.stringify(req.body)}`);
})
router.post('/', (req, res) => { // salvar

    res.send(`POST: ${JSON.stringify(req.body)}`);
})
router.delete('/:', (req, res) => { // deletar

    res.send(`DELETAR: ${req.params.id}`);
})


module.exports = router;