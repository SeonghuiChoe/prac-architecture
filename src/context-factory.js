const mysqlContext = require('./mysql/connect');
const mongodbContext = require('./mongodb/connect');

module.exports = (type) => {
  switch (type) {
    case 'mysql':
      return mysqlContext();
    case 'mongodb':
      return mongodbContext();
    default:
      return null;
  }
};
