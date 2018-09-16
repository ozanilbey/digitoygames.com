import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import http from 'http';
import express from 'express';
import fs from 'fs';

import App from './App.jsx';

const index = fs.readFileSync('index.html', 'utf8');

const app = new express();
const server = new http.Server(app);
const port = process.env.PORT || 3000;

app.get('*.js', function (request, response, next) {
    request.url = request.url + '.gz';
    response.set('Content-Type', 'text/javascript');
    response.set('Content-Encoding', 'gzip');
    next();
});

app.use('/app', express.static('app'));

app.use((request, response) => {
    const context = {};
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={request.url} context={context}>
            <App/>
        </StaticRouter>
    );
    if (context.url) {
        response.writeHead(301, {Location: context.url});
        response.end();
    } else {
        response.write(index.replace(
            /<div id="root"><\/div>/,
            `<div id="root">${html}</div>`
        ));
        response.end();
    }
});

server.listen(port, '0.0.0.0', function() {
    console.log(`\nApplication available at ${port}\n`);
    setInterval(function() {
        http.get("https://digitoygames-com.herokuapp.com");
    }, 1500000); // every 25 minutes
});