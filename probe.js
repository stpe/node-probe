var http = require("http");
var hosts = (process.env.HOSTS || "").split(",");
for(var i = 0; i < hosts.length; i++) {
  if(hosts[i].length > 0) {
    http.request({method: "HEAD", host: hosts[i], port: 80, path: "/"}, function(res) {
      res.on("data", function() {});
      res.on("end", function() {
        console.log(res.req._headers.host + ": " + res.statusCode);
      });
    }).end();
  }
}