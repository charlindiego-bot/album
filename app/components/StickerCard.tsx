"use client"

type Props = {
  codigo:string
  quantidade:number
  onAdicionar:()=>void
  onRemover:()=>void
}

export default function StickerCard({
codigo,
quantidade,
onAdicionar,
onRemover
}:Props){

const repetidas =
quantidade > 1
? quantidade-1
:0

return(

<div className="
bg-zinc-900
rounded-2xl
p-4
border
border-blue-500/20">

<div className="
flex
justify-between
items-center">

<div>

<h2 className="font-bold">
{codigo}
</h2>

<p className="text-sm text-zinc-400">

{quantidade===0 && "Faltando"}

{quantidade===1 && "Colada"}

{quantidade>1 &&
`Repetidas: ${repetidas}`}

</p>

</div>

<div className="flex gap-2">

<button
onClick={onRemover}
className="
bg-red-500
w-8
h-8
rounded-full">

-
</button>

<span className="
w-8
text-center">

{quantidade}

</span>

<button
onClick={onAdicionar}
className="
bg-blue-500
w-8
h-8
rounded-full">

+
</button>

</div>

</div>

</div>

)

}
