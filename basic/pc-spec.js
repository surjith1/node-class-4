const os = require("os");
console.log("Free Mem", os.freemem()/1024/1024/1024);
console.log("os version", os.version())