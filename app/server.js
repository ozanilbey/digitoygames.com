import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import http from 'http'; //import https from 'https';
import express from 'express';
import fs from 'fs';
import App from './App.jsx';

const index = fs.readFileSync('index.html', 'utf8');

const app = new express();

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

const server = app.listen(process.env.PORT || 3000, function () {
    let port = server.address().port;
    console.log("Express is working on port " + port);
});

/*
const PORT = process.env.PORT || 3000;
const server = new http.Server(app);
server.listen(PORT, '0.0.0.0');
console.log(`\nApplication available at ${PORT}\n`);
*/