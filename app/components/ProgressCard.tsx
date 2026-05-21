import ProgressCard from "../components/ProgressCard"
import { Book, Repeat, CircleDashed } from "lucide-react"

export default function Home(){

const album = {
 total:980,
 coladas:0,
 faltam:980,
 repetidas:0
}

return (

<div className="min-h-screen bg-black text-white p-6">

<div className="mb-8">

<h1 className="
text-3xl
font-bold">

⚽ Copa 2026 Album
</h1>

<p className="
text-zinc-400">

Gerencie suas figurinhas
</p>

</div>

<div className="
grid
grid-cols-2
gap-4">

<ProgressCard
titulo="Coladas"
valor={album.coladas}
/>

<ProgressCard
titulo="Faltam"
valor={album.faltam}
/>

<ProgressCard
titulo="Repetidas"
valor={album.repetidas}
/>

<ProgressCard
titulo="Total"
valor={album.total}
/>

</div>

<div className="
mt-8
bg-zinc-900
rounded-3xl
p-5">

<h2 className="font-bold text-xl mb-4">

Álbum Copa 2026
</h2>

<div className="space-y-4">

<div className="
flex
justify-between">

<div className="flex gap-2">
<Book/>
<span>Figurinhas</span>
</div>

<span>980</span>

</div>

<div className="
flex
justify-between">

<div className="flex gap-2">
<Repeat/>
<span>Trocas</span>
</div>

<span>0</span>

</div>

<div className="
flex
justify-between">

<div className="flex gap-2">
<CircleDashed/>
<span>Faltando</span>
</div>

<span>980</span>

</div>

</div>

</div>

</div>

)

}