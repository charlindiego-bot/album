"use client";

import BottomNav from "../components/BottomNav";
import { useAlbum } from "../context/AlbumContext";

export default function Trocas(){

const { figurinhas } = useAlbum();

const repetidas = figurinhas.filter(
fig => fig.quantidade > 1
);

const compartilharWhatsApp = () => {

if(repetidas.length===0){

alert(
"Nenhuma figurinha repetida"
);

return;

}

const mensagem = `⚽ Minhas figurinhas repetidas Copa 2026:\n\n${
repetidas
.map(item=>

`${item.codigo} x${item.quantidade-1}`

)
.join("\n")
}

\n\nTroca comigo 😀`;

const url=

`https://wa.me/?text=${
encodeURIComponent(
mensagem
)
}`;

window.open(
url,
"_blank"
);

};


return(

<div className="min-h-screen bg-black text-white p-6 pb-28">

<h1 className="text-3xl font-bold">
🔄 Trocas
</h1>

<p className="text-zinc-400 mt-2">
Suas figurinhas repetidas
</p>

<button
onClick={
compartilharWhatsApp
}
className="
mt-4
bg-green-500
px-4
py-3
rounded-xl
font-bold">

📤 Compartilhar no WhatsApp

</button>

<div className="mt-6 space-y-4">

{repetidas.length === 0 ? (

<div className="
bg-zinc-900
rounded-xl
p-4">

Nenhuma figurinha repetida

</div>

) : (

repetidas.map(item=>(

<div
key={item.codigo}

className="
bg-zinc-900
rounded-xl
p-4
flex
justify-between">

<span>

{item.codigo}

</span>

<span>

x{item.quantidade-1}

</span>

</div>

))

)}

</div>

<BottomNav/>

</div>

)

}