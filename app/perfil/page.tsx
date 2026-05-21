"use client";

import BottomNav from "../components/BottomNav";
import { useAlbum } from "../context/AlbumContext";

export default function Perfil(){

const { figurinhas } = useAlbum();

const total=980;

const coladas=
figurinhas.filter(
x=>x.quantidade>=1
).length;

const repetidas=
figurinhas.reduce(
(total,item)=>

total+
Math.max(
0,item.quantidade-1)

,0);

const porcentagem=
Math.round(
(coladas/total)*100
);

return(

<div className="min-h-screen bg-black text-white p-6 pb-28">

<h1 className="text-3xl font-bold">
👤 Perfil
</h1>

<p className="text-zinc-400 mt-2">
Seu progresso no álbum
</p>

<div className="bg-zinc-900 rounded-2xl p-5 mt-6">

<h2 className="font-bold text-xl">
Progresso
</h2>

<div className="
w-full
bg-zinc-800
rounded-full
h-6
mt-4">

<div
className="
bg-blue-500
h-6
rounded-full
transition-all"

style={{
width:`${porcentagem}%`
}}
></div>

</div>

<p className="mt-3">
{porcentagem}% concluído
</p>

</div>

<div className="
grid
grid-cols-2
gap-4
mt-6">

<div className="
bg-zinc-900
rounded-xl
p-4">

📚 Coladas: {coladas}

</div>

<div className="
bg-zinc-900
rounded-xl
p-4">

🔄 Repetidas: {repetidas}

</div>

<div className="
bg-zinc-900
rounded-xl
p-4">

❌ Faltam: {total-coladas}

</div>

<div className="
bg-zinc-900
rounded-xl
p-4">

🏆 Total: {total}

</div>

</div>

<BottomNav/>

</div>

)

}