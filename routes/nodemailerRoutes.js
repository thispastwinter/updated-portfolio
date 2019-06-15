require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
app.use(express.json());

module.exports = function (app) {
  app.post('/', async (req, res) => {
    try {
      let mailOpts, smtpTrans;
      smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      });
      mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: process.env.GMAIL_USER,
        subject: 'New message from contact form at justinklaas.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      };
      smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
          res.send('failure');
        } else {
          res.send('success');
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });
}