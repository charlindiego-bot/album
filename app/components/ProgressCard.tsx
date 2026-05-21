import { Book, Repeat, CircleDashed } from "lucide-react";

// 1. Definição estrita das propriedades exigida pelo TypeScript
interface ProgressCardProps {
  titulo: string;
  valor: number;
}

// 2. Componente interno tipado corretamente
function ProgressCard({ titulo, valor }: ProgressCardProps) {
  return (
    <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800/50">
      <p className="text-zinc-400 text-sm font-medium">{titulo}</p>
      <p className="text-2xl font-bold mt-1 text-white">{valor}</p>
    </div>
  );
}

export default function Home() {
  const album = {
    total: 980,
    coladas: 0,
    faltam: 980,
    repetidas: 0,
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">⚽ Copa 2026 Album</h1>
        <p className="text-zinc-400">Gerencie suas figurinhas</p>
      </div>

      {/* Renderização dos cards utilizando o componente tipado acima */}
      <div className="grid grid-cols-2 gap-4">
        <ProgressCard titulo="Coladas" valor={album.coladas} />
        <ProgressCard titulo="Faltam" valor={album.faltam} />
        <ProgressCard titulo="Repetidas" valor={album.repetidas} />
        <ProgressCard titulo="Total" valor={album.total} />
      </div>

      <div className="mt-8 bg-zinc-900 rounded-3xl p-5">
        <h2 className="font-bold text-xl mb-4">Álbum Copa 2026</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Book />
              <span>Figurinhas</span>
            </div>
            <span>980</span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <Repeat />
              <span>Trocas</span>
            </div>
            <span>0</span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <CircleDashed />
              <span>Faltando</span>
            </div>
            <span>980</span>
          </div>
        </div>
      </div>
    </div>
  );
}