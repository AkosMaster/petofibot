var fs = require("fs");

 fs.readFile("poem.txt", "utf8", function(err, data) {
data = data.replace(/(?:\r\n|\r|\n)/g, '\n\n');


console.log(data.split("\n")[0])

console.log(data)
});