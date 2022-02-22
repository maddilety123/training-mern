const path = require("path");
const path1 = "document/d/users/index.js";
console.log("2.a...................");

console.log("directory name...>", path.dirname(path1));
console.log("extension name...>", path.extname(path1));
console.log("base name...>", path.basename(path1));

console.log("2.b...................");

const parsedPath2Obj = path.parse(path1);
console.log(path.format({ ...parsedPath2Obj, base: "newbase.js" }));

console.log("2.c...................");
const path3 = "document/d/users/index.js";
console.log(path.parse(path3).dir);
