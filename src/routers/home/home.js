const router = require('express').Router();

module.exports = (beverageRepository) => {
  router.get('/', (req, res) => {
    beverageRepository.getBeverages().then((beverages) => {
      res.json({
        beverages,
      });
    });
  });

  return router;
};
