# Gittor Server (proof of concept)

A simple realtime server built with rethinkDB

## Note

this repo is written from ground up from various tutorials:
- rethinkDB 10 minute guide: https://rethinkdb.com/docs/guide/javascript/
- engine.io tutorial: https://github.com/socketio/engine.io

In the past, I had issues with a socket server having memory leak problem. So this time we want to start small and make
each step very carefully.

The chat client to this backend can be found at [escher](https://github.com/episodeyang/escher)

## To run

```
npm run start-db
```

Then in a new console window run

```
npm run start
```
