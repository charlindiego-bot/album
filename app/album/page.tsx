"use client";

import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { useAlbum } from "../context/AlbumContext";
import stickers from "../../data/stickers.json";

const bandeiras:any = {

BRA:"🇧🇷",
ARG:"🇦🇷",
MEX:"🇲🇽",
RSA:"🇿🇦",
KOR:"🇰🇷",
CZE:"🇨🇿",
CAN:"🇨🇦",
BIH:"🇧🇦",
QAT:"🇶🇦",
SUI:"🇨🇭",
MAR:"🇲🇦",
HAI:"🇭🇹",
SCO:"🏴",
USA:"🇺🇸",
PAR:"🇵🇾",
AUS:"🇦🇺",
TUR:"🇹🇷",
GER:"🇩🇪",
CUW:"🇨🇼",
CIV:"🇨🇮",
ECU:"🇪🇨",
NED:"🇳🇱",
JPN:"🇯🇵",
SWE:"🇸🇪",
TUN:"🇹🇳",
BEL:"🇧🇪",
EGY:"🇪🇬",
IRN:"🇮🇷",
NZL:"🇳🇿",
ESP:"🇪🇸",
CPV:"🇨🇻",
KSA:"🇸🇦",
URU:"🇺🇾",
FRA:"🇫🇷",
SEN:"🇸🇳",
IRQ:"🇮🇶",
NOR:"🇳🇴",
POR:"🇵🇹",
COD:"🇨🇩",
UZB:"🇺🇿",
COL:"🇨🇴",
ENG:"🏴",
CRO:"🇭🇷",
GHA:"🇬🇭",
PAN:"🇵🇦"

};

export default function Album(){

const {
figurinhas,
alterarQuantidade
}=useAlbum();

const [busca,setBusca]=useState("");
const [paisFiltro,setPaisFiltro]=useState("");
const [grupoFiltro,setGrupoFiltro]=useState("");

const paises=[
...new Set(
stickers.map(
(item:any)=>item.pais
)
)
].sort();

const grupos=[
...new Set(
stickers.map(
(item:any)=>item.grupo
)
)
].sort();

const listaCompleta=
figurinhas.map(fig=>{

const info=
stickers.find(
(item:any)=>
item.codigo===fig.codigo
);

return{

...fig,
...info

};

});

const filtradas=
listaCompleta.filter(item=>{

const buscaOk=

item.codigo
.toLowerCase()
.includes(
busca.toLowerCase()
);

const paisOk=

!paisFiltro ||
item.pais===paisFiltro;

const grupoOk=

!grupoFiltro ||
item.grupo===grupoFiltro;

return(

buscaOk &&
paisOk &&
grupoOk

);

});

return(

<div className="min-h-screen bg-black text-white p-6 pb-28">

<h1 className="text-3xl font-bold">
📚 Álbum
</h1>

<p className="text-zinc-400 mt-2">
Gerencie suas figurinhas
</p>

<input
placeholder="Buscar código..."
value={busca}
onChange={(e)=>
setBusca(
e.target.value
)
}
className="
w-full
bg-zinc-900
rounded-xl
p-3
mt-6"
/>

<div className="
grid
grid-cols-2
gap-3
mt-4">

<select
value={paisFiltro}
onChange={(e)=>
setPaisFiltro(
e.target.value
)
}
className="
bg-zinc-900
p-3
rounded-xl">

<option value="">
Todos países
</option>

{paises.map(pais=>(

<option
key={pais}
value={pais}>

{pais}

</option>

))}

</select>

<select
value={grupoFiltro}
onChange={(e)=>
setGrupoFiltro(
e.target.value
)
}
className="
bg-zinc-900
p-3
rounded-xl">

<option value="">
Todos grupos
</option>

{grupos.map(grupo=>(

<option
key={grupo}
value={grupo}>

Grupo {grupo}

</option>

))}

</select>

</div>

<div className="space-y-4 mt-6">

{filtradas.map(item=>(

<div
key={item.codigo}
className="
bg-zinc-900
rounded-xl
p-4
flex
justify-between
items-center">

<div>

<h3 className="font-bold flex items-center gap-2">

<span>
{item.pais && bandeiras[item.pais] ? bandeiras[item.pais] : "🏳️"}
</span>

<span>
{item.codigo}
</span>

</h3>

<p className="text-sm text-zinc-400">

{item.nome}

</p>

<p className="text-xs text-zinc-500">

{item.pais}

</p>

<div className="flex gap-2 mt-2">

<span className="
text-xs
bg-zinc-800
px-2
py-1
rounded-full">

Grupo {item.grupo}

</span>

{item.quantidade===0 && (

<span className="
text-xs
bg-red-500
px-2
py-1
rounded-full">

Faltando

</span>

)}

{item.quantidade===1 && (

<span className="
text-xs
bg-green-500
px-2
py-1
rounded-full">

Colada

</span>

)}

{item.quantidade>1 && (

<span className="
text-xs
bg-yellow-500
text-black
px-2
py-1
rounded-full">

Repetida x{item.quantidade-1}

</span>

)}

</div>

</div>

<div className="flex gap-3">

<button
onClick={()=>
alterarQuantidade(
item.codigo,
-1
)
}
className="
w-8
h-8
bg-red-500
rounded-full">

-

</button>

<span>

{item.quantidade}

</span>

<button
onClick={()=>
alterarQuantidade(
item.codigo,
1
)
}
className="
w-8
h-8
bg-blue-500
rounded-full">

+

</button>

</div>

</div>

))}

</div>

<BottomNav/>

</div>

)

}