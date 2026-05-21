const fs = require("fs");

const csv = fs
.readFileSync(
"./data/stickers_copa2026.csv",
"utf8"
)
.split("\n");

const headers =
csv[0].split(",");

const resultado =
csv.slice(1)
.filter(Boolean)
.map(linha=>{

const valores =
linha.split(",");

let obj={};

headers.forEach(
(header,index)=>{

obj[header.trim()]=
valores[index]?.trim();

});

return obj;

});

fs.writeFileSync(
"./data/stickers.json",
JSON.stringify(
resultado,
null,
2
)
);

console.log(
"JSON criado!"
);