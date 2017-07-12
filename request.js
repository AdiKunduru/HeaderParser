
var express = require("express")
var http = require("http")
var app = express();
var port = process.env.PORT || 3500;
var output = {address: 0, language : "", browser :""};


app.get("/", function(req,res)
{
    output.address = req.ip;
    res.send(output)
})

app.listen(port);
    



//console.log(juice)
