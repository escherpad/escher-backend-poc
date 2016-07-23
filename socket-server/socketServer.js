#!/usr/bin/env node
var Engine = require('engine.io');
var server = Engine.listen(27183);

var messageHandle = require("./actionHandle");

server.on('connection', (socket)=> {
    "use strict";
    let r;
    socket.on("message", (message)=> {
        let data = JSON.parse(message);
        if (data.$action) {
            r = messageHandle(data.$action, socket);
        }
    });
});