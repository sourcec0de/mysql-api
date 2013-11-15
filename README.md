# MySQL-API

This is a very simple mysql api server.

There is one endpoint.

POST /exec

Send plain text as the request body.
This allows you to write complex SQL and send it as a post request.


Connect to your server by modifying `controllers/index.js`
- `host`
- `port`
- `user`
- `password`
- `database`