"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import stickers from "../../data/stickers.json";

type Figurinha = {
  codigo:string;
  quantidade:number;
};

type AlbumContextType = {
  figurinhas:Figurinha[];
  alterarQuantidade:(
    codigo:string,
    valor:number
  )=>void;
};

const AlbumContext=
createContext<
AlbumContextType | null
>(null);

export function AlbumProvider({
children
}:{
children:React.ReactNode
}){

const listaInicial:Figurinha[]=
stickers.map(
(item:any)=>({

codigo:item.codigo,
quantidade:0

})
);

const [figurinhas,setFigurinhas]=
useState<Figurinha[]>(
listaInicial
);

useEffect(()=>{

const salvo=
localStorage.getItem(
"album2026"
);

if(salvo){

try{

const dados=
JSON.parse(salvo);

const valido=
Array.isArray(dados) &&
dados.every(
(item)=>

typeof item.codigo==="string" &&
typeof item.quantidade==="number"
);

if(valido){

setFigurinhas(
dados
);

}

}catch{

console.log(
"dados antigos ignorados"
);

}

}

},[]);

useEffect(()=>{

localStorage.setItem(
"album2026",
JSON.stringify(
figurinhas
)

);

},[figurinhas]);

function alterarQuantidade(
codigo:string,
valor:number
){

setFigurinhas(
atual=>

atual.map(fig=>

fig.codigo===codigo
?{

...fig,

quantidade:
Math.max(
0,
fig.quantidade+
valor
)

}

:fig

)

);

}

return(

<AlbumContext.Provider

value={{

figurinhas,
alterarQuantidade

}}

>

{children}

</AlbumContext.Provider>

);

}

export function useAlbum(){

const context=
useContext(
AlbumContext
);

if(!context){

throw new Error(
"useAlbum fora do provider"
);

}

return context;

}