"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav(){

const pathname = usePathname();

const menus = [

{
nome:"Início",
icone:"🏠",
link:"/"
},

{
nome:"Álbum",
icone:"📚",
link:"/album"
},

{
nome:"Trocas",
icone:"🔄",
link:"/trocas"
},

{
nome:"Perfil",
icone:"👤",
link:"/perfil"
}

];

return(

<div className="
fixed
bottom-0
left-0
right-0
bg-zinc-950
border-t
border-zinc-800
flex
justify-around
p-4">

{menus.map(item=>(

<Link
key={item.link}
href={item.link}

className={`

flex
flex-col
items-center
text-sm

${
pathname===item.link
? "text-blue-400"
: "text-zinc-400"
}

`}>

<span>

{item.icone}

</span>

<span>

{item.nome}

</span>

</Link>

))}

</div>

)

}