const db = require('../models')
const path = require('path');
const express = require('express');
const app = express();

module.exports = function (app) {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })

  app.get('/portfolio', async (req, res) => {
    try {
      let allProjects = await db.Projects.findAll({});
      res.render('portfolio', {
        allProjects
      });
    } catch (err) {
      res.render('500', {
        layout: 'main'
      });
    }
  });

  app.get('/portfolio/:id', async (req, res) => {
    try {
      let projects = await db.Projects.findAll({
        where: {
          id: req.params.id
        }
      });
      res.render('projects', {
        projects,
      });
    } catch (err) {
      res.render('500', {
        layout: 'main'
      });
    }
  });

  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  })

}