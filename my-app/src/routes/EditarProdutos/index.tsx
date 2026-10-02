import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../Produtos";

const listaProdutos = [

  {id: 1, nome: "Produto-1", preco: 23.90 },
  {id: 2, nome: "Produto-2", preco: 99.10 },
  {id: 3, nome: "Produto-3", preco: 132.40 },
];

export default function EditarProduto() {
  document.title = "Editar Produto";

  const navigate useNavigate 

  const { id } = useParams<{id:string}>();

  const [produto, setProduto] = useState<TipoProduto>({} as { id:"",nome:"",preco:0,estoque:0 });

  useEffect( ()=> {

  },[]);

  return (
    <main>
        <h2>Editar Produtos</h2>
        <p>ID : {id}</p>

        <div>

        {produto ?
          (
          <div>
            <p>Nome : {produto.nome}</p>
            <p>Preço: {produto.preco}</p>
          </div>
          ):
          (<p>Produto não encontrado!</p>)
         }

        </div>

    </main>
  )
}
