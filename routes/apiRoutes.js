db = require('../models/');

module.exports = function (app) {

  // Get All Projects

  app.get('/api/projects/', async (req, res) => {
    try {
      const dbProject = await db.Projects.findAll({});
      res.json(dbProject);

    } catch (err) {
      res.status(500).send(err);
    }
  });

  // Get Single Project

  app.get('/api/projects/:id', async (req, res) => {
    try {
      const dbProject = await db.Projects.findAll({
        where: {
          id: req.params.id
        },
        include: [db.dbProject]
      });
      res.json(dbProject);

    } catch (err) {
      res.status(500).send(err);
    }
  });
}