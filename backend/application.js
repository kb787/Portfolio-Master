var express = require('express') ;
var http = require('http') ;
var app = express() ;
var server = http.createServer(app) ;
var morgan = require('morgan') ;
var Connect = require('./configure') ;
var {registerRouter, profileRouter,projectRouter} = require('./controller') ;
var cors = require('cors') ;

 var corsOptions = {
  origin:"https://localhost:3000" ,
 }
app.use(express.json()) ;
app.use(morgan('dev')) ;
app.use(cors(corsOptions)) ;

Connect() ;
app.get("/", (req,res) => 
{
     res.send(" Your app lauch is successfull ") ;
}
)

app.use("/api/users", registerRouter) ;
app.use("/v1/api/profiles",profileRouter) ;
app.use("/v2/api/projects",projectRouter) ;
server.listen(3500 ,  () =>  
{
    console.log(" App launched ") ;
} 
) ;
