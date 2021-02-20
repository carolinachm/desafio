const express = require('express')

const router = express.Router();

const pessoaService = require('../service/pessoaService')

router.get('/pessoas', async function (req, res){
    const pessoas = await pessoaService.getPessoas();
    res.json(pessoas)

})

router.get('/pessoas/:pessoa_id', async function (req, res){
    const pessoas = await pessoaService.getPessoa();
    res.json(pessoas)

})

router.post('/pessoas', async function (req, res){
    const pessoa = req.body
    const newPessoa = await pessoaService.savePessoa(pessoa)
    res.json(newPessoa)

})
router.put('/pessoas/:pessoa_id', async function (req, res){
    const pessoa = req.body
    await pessoaService.updatePessoa(req.params.pessoa_id, pessoa)
    res.end();

})
router.delete('/pessoas/:pessoa_id', async function (req, res){
    const pessoa = req.body
    await pessoaService.deletePessoa(req.params.pessoa_id, pessoa)
    res.end();
})



module.exports = router