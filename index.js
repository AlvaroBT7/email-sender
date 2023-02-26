require("colors");
const fs = require("fs");
const path = require("path");
const { rootCertificates } = require("tls");

const findDesktop = (currentPath) => {
  while (path.basename(currentPath) !== "Desktop") {
    currentPath = path.dirname(currentPath);
  }
  return currentPath;
};

let pathLocation = __dirname;
pathLocation = findDesktop(pathLocation);

try {
  fs.mkdir(path.join(pathLocation, "programa node"), (err) => {
    if (err) throw "La carpeta ya existe !".bgRed;
    pathLocation = path.join(pathLocation, "programa node");
    fs.writeFile(
      path.join(pathLocation, "index.txt"),
      "Que marraneria de programa !",
      (err) => {
        if (err) throw err;
        return console.log("Finalizado !".bgGreen);
      }
    );
  });
} catch (err) {
  console.log(err);
}
