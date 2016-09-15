How to run the app:
1. git clone the repository, then cd to the repository directory, run "npm install", this will install all modules required for this project
2. run "grunt build" go generate a bundle.js
3. run "npm start" to start the application
4. open http://localhost:3000/ in the browser

To run the test:
run "grunt test" command

key points summary:
1. on both client side Javascript  and server side, we need to use the same http verb, for example, if we use $http.post in Angular, then on the server side, we need to use post as well.
2. when using https.get(), we can pass path parameters or query parameters, then in the https.get(), we can construct the query part or path part.
3. when using https.post(), we don't pass data in the url, we put it in the requet body.
4. we need to use querystring.stringify(data) to convert coming request parameters to '&' string
5. if we want to access to req.body, then we need to configure express server to do app.use(bodyParser.json()).
6. Access-Control-Allow-Origin:*,  this makes all domains to access to this url 
