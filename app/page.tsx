"use client";

import BottomNav from "./components/BottomNav";
import { useAlbum } from "./context/AlbumContext";

export default function Home(){

const {
figurinhas,
alterarQuantidade
}=useAlbum();

const coladas =
figurinhas.filter(
x=>x.quantidade>=1
).length;

const repetidas =
figurinhas.reduce(
(total,item)=>

total+
Math.max(
0,
item.quantidade-1
)

,0);

const faltam =
980-coladas;

return(

<div className="min-h-screen bg-black text-white p-6 pb-28">

<h1 className="text-4xl font-bold">

⚽ Copa do Mundo 2026

</h1>

<p className="text-zinc-400 mt-2">

Meu álbum de figurinhas

</p>

<div className="mt-6 bg-zinc-900 rounded-2xl p-5">

<h2 className="font-bold text-xl">

Estatísticas

</h2>

<div className="grid grid-cols-2 gap-4 mt-4">

<div className="bg-black p-4 rounded-xl">
Coladas: {coladas}
</div>

<div className="bg-black p-4 rounded-xl">
Faltam: {faltam}
</div>

<div className="bg-black p-4 rounded-xl">
Repetidas: {repetidas}
</div>

<div className="bg-black p-4 rounded-xl">
Total: 980
</div>

</div>

</div>

<div className="mt-6">

<h2 className="font-bold text-xl mb-4">

Últimas figurinhas

</h2>

<div className="space-y-4">

{figurinhas.slice(0,5).map(item=>(

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

<h3 className="font-bold">

{item.codigo}

</h3>

<p className="text-sm text-zinc-400">

Quantidade:
{item.quantidade}

</p>

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

</div>

<BottomNav/>

</div>

)

}