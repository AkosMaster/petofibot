function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;


  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var items=[];
var abc1=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z", " ", ",", "!", "?", ".","\\n", ";","-","'",":","(",")","„","–","\”"]
var abc2=["a","á","e","é","o","ó","ü","û","ö","õ","i","í"]
var fs = require('fs');

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);

      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
   func(remaining);
getLine();
    }
  });
}

function func(data) {

 items.push(data);
}

function randomLine() {
line=Math.floor(Math.random()*items.length);
text=items[line];
//items.splice(line,1)
return text;
}

var input = fs.createReadStream('data.txt',"utf8");
readLines(input, func);


function getLast(line) {

l=[];
x=0;
for (var i = line.length; i > 0; i--) {
if (!abc1.includes(line.charAt(i).toLowerCase())) {

x++;
if (x>2 && x<6) {
  l.push(line.charAt(i))
}
}
}
return(l)
}
last=[];
function getLine() {

line=randomLine();
console.log(line);
last=getLast(line)


poeme=[]

for (var i = items.length-1; i > 0; i--) {
b=items[i];

if (arraysEqual(getLast(b),last)) {
if (b!=line) {
poeme.push(items[i])

}
}
}
lastLine=poeme[Math.floor(Math.random()*poeme.length)];
if (lastLine) {
console.log(lastLine)
} else {
console.log(randomLine())
}

}


