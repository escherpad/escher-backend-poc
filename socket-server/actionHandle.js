/** Created by ge on 4/3/16. */
var JSON3 = require("json3");
var models = require("./models");
var Message = models.Message;
var Errors = models._Errors;
var r = models._r;
module.exports = function messageHandle(action, socket) {
    "use strict";
    if (!action) return;
    if (action.type === "OVERWRITE_FETCHED") {
        // console.log("OVERWRITE_FETCHED");
        if (action.message.id) {
            Message.get(action.message.id)
                .update(action.message)
                .then(function (message) {
                    // console.log('*** write successful ***');
                })
                .catch(Errors.DocumentNotFound, function () {
                    var newMessage = new Message(action.message);
                    newMessage.save().then(function message() {
                        // console.log("*** add new message successful ***");
                    });
                })
        }
    } else if (action.type === "SUBSCRIBE_TO_CHANNEL") {
        r.table('Message')
            .orderBy({index: r.asc('createdAt')}) //.filter(r.row.gt(10))
            .changes({includeInitial: true, includeStates: true})
            .run(function (err, result) {
                socket.on('close', ()=> {
                    result.close();
                });
                result.each((err, change)=> {
                    if (err) return console.log("channel subscription error:", err);
                    if (!change) return;
                    if (!change.new_val) return; //return console.log("change: ", change);
                    var message = JSON3.stringify({
                        $action: {
                            type: "MERGE_FETCHED",
                            message: change.new_val
                        }
                    });
                    socket.send(message);
                    //console.log(message);
                });
            });
    }

    return r;
};
