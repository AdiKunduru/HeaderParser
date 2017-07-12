
var express = require("express")
var app = express()
var port = process.env.PORT || 3500;
var output = {address: 0, langs : "", browser :""};


app.get("/", function(req,res)
{
    output.address = req.ip;
    output.langs = req.headers['accept-language'];
    output.browser = req.headers['user-agent'];
    res.json(output);
  

})

app.listen(port,function()
{
  console.log("listening on port 3000")
})




//console.log(juice)
