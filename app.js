let express = require("express");
let app = express();
let routing=require('./router.js');
app.use('/',routing);
app.listen(8080);