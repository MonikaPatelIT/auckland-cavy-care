const nextApp = require('next');
const express = require('express');
const { parse } = require('url');
var bodyParser = require('body-parser');
const path = require('path');

const nextServer = nextApp({ dev: true });
const handle = nextServer.getRequestHandler();

const port = '7000'; //dev port

nextServer.prepare().then(() => {
  const server = express();
  server.enable('trust-proxy');

  server.use(
    bodyParser.urlencoded({extended: true})
  );
  server.use(bodyParser.json());


  server.get('/api/ping', function(req,res, next) {
    res.status(200).send(
      {type: 'ball', 
      name: 'pong'
    });
    next();
  })

  server.use((req,res, next) => {
    const parsedUrl = parse(req.url, true);
    // static handling conditions


    return next();
  });

  server.get('*', (req, res) => handle(req,res));

  server.listen(port, ()=> {
    console.info(`App is served at ${port}\n`); // eslint-disable-line no-console
  });

});