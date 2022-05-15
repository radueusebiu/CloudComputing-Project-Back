const express = require("express");
const messagesRouter = require("./routers/messagesRouter"); //look here
const rezervationRouter = require("./routers/rezervationRouter");
const utilsRouter = require('./routers/utilsRouter');


const bodyParser = require("body-parser");

const app = express();
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/messages', messagesRouter); //and look here too
app.use('/rezervation', rezervationRouter);
app.use('/utils', utilsRouter);



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});