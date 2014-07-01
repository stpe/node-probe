var http = require("http");
var url = require("url");
var hosts = (process.env.HOSTS || "").split(",");
for(var i = 0; i < hosts.length; i++) {
    if (hosts[i].indexOf("http") !== 0) hosts[i] = "http://" + hosts[i];

    var u = url.parse(hosts[i]);
    if (!u.host) continue;

    http.request({method: "HEAD", host: u.host, port: u.port || 80, path: u.path}, function(res) {
        res.on("data", function() {});
        res.on("end", function() {
            console.log(res.req._headers.host + ": " + res.statusCode);
        });
    }).end();
}