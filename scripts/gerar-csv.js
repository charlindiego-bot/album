const fs = require("fs");

const groups = {
A:[["MEX","México"],["RSA","África do Sul"],["KOR","Coreia do Sul"],["CZE","Rep. Tcheca"]],
B:[["CAN","Canadá"],["BIH","Bósnia"],["QAT","Catar"],["SUI","Suíça"]],
C:[["BRA","Brasil"],["MAR","Marrocos"],["HAI","Haiti"],["SCO","Escócia"]],
D:[["USA","Estados Unidos"],["PAR","Paraguai"],["AUS","Austrália"],["TUR","Turquia"]],
E:[["GER","Alemanha"],["CUW","Curaçao"],["CIV","Costa do Marfim"],["ECU","Equador"]],
F:[["NED","Holanda"],["JPN","Japão"],["SWE","Suécia"],["TUN","Tunísia"]],
G:[["BEL","Bélgica"],["EGY","Egito"],["IRN","Irã"],["NZL","Nova Zelândia"]],
H:[["ESP","Espanha"],["CPV","Cabo Verde"],["KSA","Arábia Saudita"],["URU","Uruguai"]],
I:[["FRA","França"],["SEN","Senegal"],["IRQ","Iraque"],["NOR","Noruega"]],
J:[["ARG","Argentina"],["ALG","Argélia"],["AUT","Áustria"],["JOR","Jordânia"]],
K:[["POR","Portugal"],["COD","Congo"],["UZB","Uzbequistão"],["COL","Colômbia"]],
L:[["ENG","Inglaterra"],["CRO","Croácia"],["GHA","Gana"],["PAN","Panamá"]]
};

const rows = [
"codigo,nome,pais,grupo,categoria"
];

for (const grupo in groups){

  groups[grupo].forEach(([sigla,nome])=>{

    for(let n=1;n<=20;n++){

      rows.push(
`${sigla}${String(n).padStart(2,"0")},${nome},${sigla},${grupo},Seleção`
      );

    }

  });

}

for(let n=9;n<=19;n++){

rows.push(
`FWC${n},FIFA World Cup History,FWC,Especial,História`
);

}

for(let n=1;n<=14;n++){

rows.push(
`CC${n},Figurinhas Coca-Cola,CC,Especial,Patrocinador`
);

}

fs.writeFileSync(
"./data/stickers_copa2026.csv",
rows.join("\n"),
"utf8"
);

console.log(
`Arquivo criado com ${rows.length-1} figurinhas`
);