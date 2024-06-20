const _ = require('lodash')
const xlsx = require('xlsx')
const file = './dados_clientes.xlsx'
const express = require('express')

const app = express()
const port = 8080

app.get('/cliente1', (_, res) =>{
    const wb = xlsx.readFile(file)
    const ws = wb.Sheets["Sheet1"]
    const data = xlsx.utils.sheet_to_json(ws)

    const spec = {}
    const _u = _.noConflict()

    for(let i =0; i< data.length; i++){
        _u.set(spec, `${i}`, data[i])
    }

    res.send(spec)
})

app.get('/cliente2', (req, res) =>{
    const wb = xlsx.readFile(file)
    const ws = wb.Sheets["Sheet1"]
    const data = xlsx.utils.sheet_to_json(ws)

    const spec = {}
    const _u = _.noConflict()

    for(let i =0; i< data.length; i++){
        _u.set(spec, `${i}.cliente`, data[i])
    }

    res.send(spec)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})