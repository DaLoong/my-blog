const mysql = require('mysql')
const createConnection = () => {
  const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'myblod'
  })
  return connection
}
module.exports.createConnection = createConnection
