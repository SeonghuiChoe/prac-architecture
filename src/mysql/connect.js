const mysql = require('mysql');
const MysqlContext = require('./MysqlContext');

module.exports = () => {
  const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
  });
  mysqlConnection.connect();
  return new MysqlContext(mysqlConnection);
};
