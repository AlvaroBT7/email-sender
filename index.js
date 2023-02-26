// modulos globales
console.log(process);
console.log(__filename);
console.log(__dirname);
console.log(require);
console.log(module);

// modulo os (info del sistema operativo)
const os = require("os");
console.log(os);

// modulo path (funciones para la modificaciond de rutas)
const path = require("path");

const filePath = path.join("public", "javascript", "script.js");
console.log(filePath);
// nombre del ultimo elemento de la ruta
console.log(path.basename(filePath));
// nombre de la carpeta del ultimo elemento de la ruta
console.log(path.dirname(filePath));
// (lo mismo que lo anterior pero en un objeto)
console.log(path.parse(filePath));
// autocompleta la ruta de tal forma que la retorna de manera absoluta
console.log(path.resolve(filePath));


// timers
// set-up timers
setTimeout(() => null, 100);
setInterval(() => null, 100);
setImmediate(() => null);
// remove each one
clearTimeout(/*Name of the variable, array element or object key where it is located*/);
clearInterval(/*Name of the variable, array element or object key where it is located*/);
clearImmediate(/*Name of the variable, array element or object key where it is located*/);


// modulo build-in fs

const fs = require("fs");
const path = require("path");

// // fs SYNC

// // reads a file (you might parse the retored content to string otherwise you will get a buffer)
console.log(fs.readFileSync("./data/text.txt", "utf-8"));

// // writes or steps over a file in which you can write its content
fs.writeFileSync("./data/text2.txt", "Sos gracioso ?");

// // this two lines of code allows you to append content to a existing file or creates a new one
fs.appendFileSync("./data/text2.txt", "RANCIO");

fs.writeFileSync("./data/text2.txt", "Sos gracioso ?", {
  flag: "a",
});

// fs A-SYNC

fs.readFile("./data/text.txt", "utf-8", (err, value) => {
  if (!err) console.log(value);
});

// fs SYNC

const file = fs.readFile("./data/text.txt", "utf-8", (err, value) => {
  if (err) return console.log(err);
  return console.log(value);
});

console.log(file);
