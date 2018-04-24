import React from 'react';
import {renderToString} from 'react-dom/server';
var http = require('http');
import App from "./App";

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    const appHtml = renderToString(<App />);
    response.end(appHtml);
}).listen('8888');

console.log("server running at http://127.0.0.1:8888");