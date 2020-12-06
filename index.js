!process.argv[2] ? (console.log("missing block"), process.exit()) : null;

var data = JSON.parse(require("fs").readFileSync("./index.json"));
var answer = process.argv[2];
console.log("name: " + data[answer].name);
console.log("base: " + data[answer].base);
console.log("breakable: " + data[answer].breakable);
console.log("obtainable: " + data[answer].obtainable);
console.log("stack max: " + data[answer].stack);
console.log("item required: " + `${data[answer].item_required.item}, ${data[answer].item_required.type}`);