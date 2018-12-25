const app = require('express')();
const BeverageRepository = require('./BeverageRepsoitory');
const home = require('./routers/home/home');
const contextFactory = require('./context-factory.js');

const context = contextFactory('mongodb');
const beverageRepository = new BeverageRepository(context);

app.use('/', home(beverageRepository));

app.listen(3000, () => {
  console.log('App Listening on port 3000');
});
