/** Created by ge on 4/2/16. */
"use strict";
var thinky = require('thinky')();
var _Errors = thinky.Errors;
var _r = thinky.r;
var _Query = thinky.Query;
var type = thinky.type;

let defaultOptions = {
    pk: "id",
    enforce_extra: "none", // when changing schema, leave alone.
    enforce_type: "strict"
};

var Post = thinky.createModel("Note", {
    id: type.string(),
    title: type.string(),
    content: type.string(),
    users: [type.string()],
    owners: [type.string()], // does not have relationships.
    editors: [type.string()],// also does not have relationships.
    createdAt: type.date().default(_r.now()),
    updatedAt: type.date().default(_r.now())
}, defaultOptions);

var Email = thinky.createModel('Email', {
    id: type.string(),
    emai: type.string()
}, defaultOptions);

var User = thinky.createModel('User', {
    id: type.string(),
    username: type.string(),
    password: type.string(),
    team: type.string(),
}, defaultOptions);

var Team = thinky.createModel('Team', {
    id: type.string(),
    name: type.string(),
    key: type.string(),
    users: [type.string()]
}, defaultOptions);

var Channel = thinky.createModel('Channel', {
    id: type.string(),
    key: type.string(),
    purpose: type.string(),
    users: [type.string()],
    private: type.boolean()
});

var Message = thinky.createModel('Message', {
    id: type.string(),
    _v: type.number(),
    _v0: type.number(),
    post: type.string(),
    channel: type.string(),
    type: type.string(),
    data: type.string(),
    createdAt: type.date().default(_r.now()),
    updatedAt: type.date().default(_r.now()),
});
// a compount index on channel > createdAt
Message.ensureIndex("createdAt", undefined, {multi: true});
Message.ensureIndex("channel_createdAt", function (doc) {
    "use strict";
    return doc('channel').add(doc('createdAt'));
}, {multi: true});


module.exports = {
    _Errors: _Errors,
    _Query: _Query,
    _r: _r,
    Message: Message
};
