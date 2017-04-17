"use strict";
var http = require('http');
var api_1 = require('./server/api/api');
var config = require('./server/config/env/config')();
var API = api_1["default"];
var server = http.createServer(API);
server.listen(config.server_port, function () {
    console.log('Express está funcionando na porta 3000');
});
exports.__esModule = true;
exports["default"] = server;
