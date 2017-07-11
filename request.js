var express = require("express")
//var status = require("./status.js")
var http = require("http")
//var juice = status.getJSON;

var app = express()

var output = {address: 0, language : "", browser :""};
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
resp.on('data', function(ip) {
output.address = ip;

var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

output.browser = OSName;

output.language = navigator.language

app.get("/", function(res,req)
{
    res.send(output)

})

app.listen(3000,function()
{
  console.log("listening on port 3000")
})

});
});



//console.log(juice)
