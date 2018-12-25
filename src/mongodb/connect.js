const mongoose = require('mongoose');
const MongodbContext = require('./MongodbContext');

module.exports = () => {
  const mongooseConnection = mongoose.createConnection('mongodb://localhost/angelinus', {
    poolSize: 100,
    useNewUrlParser: true,
  });
  return new MongodbContext(mongooseConnection);
};
