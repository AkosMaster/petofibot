var fs = require("fs");
const snoowrap = require('snoowrap');
 fs.readFile("poem.txt", "utf8", function(err, data) {

data = data.replace(/(?:\r\n|\r|\n)/g, '\n\n');

const r = new snoowrap({
  userAgent: 'RobotPetofi',
  clientId: 'XGBuj5xzVZxjAQ',
  clientSecret: 'aAMZIhtWpvd6FbxLXmhhZImBJTk',
username: 'PetofiBot',
  password: 'Xaxthuyd'
});

r.getSubreddit('RobotPetofi')
  .submitSelfpost({title: data.split("\n")[0], text: data})
});