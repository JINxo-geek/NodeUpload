var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
//对象["keyname"] = value;键值对赋值法。
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route,handle);