//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);



// server.js
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const path = require('path')
// const router = jsonServer.router(path.join(__dirname, 'db.json'))
// const middlewares = jsonServer.defaults()
 
// server.use(middlewares)
// server.use(router)
// server.listen(3000, () => {
//   console.log('JSON Server is running')
// })