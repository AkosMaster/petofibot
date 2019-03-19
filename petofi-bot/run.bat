@echo off
:loop
node main.js > poem.txt
node main.js >> poem.txt
echo. >> poem.txt
node main.js >> poem.txt
node main.js >> poem.txt
TIMEOUT 2 > NUL
node post.js
TIMEOUT 610
goto loop