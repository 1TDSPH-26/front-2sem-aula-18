import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../../types/types";


export default function EditarProduto() {
  document.title = "Editar Produtos";

  const { id } = useParams<{id:string}>();

  const [produto, setProduto] = useState<TipoProduto>({ id:"", nome:"", preco:0, estoque: 0 });



  useEffect( ()=> {
    const produtoEncontrado = listaProdutos.find( (p)=> p.id ===  Number(id) );
    setProduto(produtoEncontrado!);
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
