const fs = require('fs');

// fs.mkdirSync("Kamrul");

// fs.writeFileSync("./kamrul/bio.txt", "Hello from Kamrul")
fs.appendFileSync("./kamrul/bio.txt", " Also from backend")
const data = fs.readFileSync("./kamrul/bio.txt", 'utf-8');
console.log(data);