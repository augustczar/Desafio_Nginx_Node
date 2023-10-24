const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

var lista = "";
const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`
connection.query(sqlCreateTable)

const sqlInsertTable = `INSERT INTO people(name) values('Augusto')`
connection.query(sqlInsertTable)

const sqlSelectTable = `SELECT name FROM people`
connection.query(sqlSelectTable, (err, results, fields) => {
    if (err) throw err
    lista = JSON.stringify(results)
})

connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>' + '</h2> NameList: </h2>' + lista)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})