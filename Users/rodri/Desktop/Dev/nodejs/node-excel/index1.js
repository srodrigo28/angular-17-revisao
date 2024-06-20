const _ = require('lodash')
const xlsx = require('xlsx')
const file = './dados_clientes.xlsx'
const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) =>{
    const wb = xlsx.readFile(file)
    const ws = wb.Sheets["Sheet1"]
    const data = xlsx.utils.sheet_to_json(ws)

    // console.log(data)
    //res.send('Hello World')
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})