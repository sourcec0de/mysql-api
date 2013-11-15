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


start the application with
`npm install`
`nodemon app.js` or `node app.js`

send `POST` to http://localhost:3000/exec


#### Example Curl
```shell

curl -XPOST http://localhost:3000/exec -d'
    SELECT * FROM tags
'

```