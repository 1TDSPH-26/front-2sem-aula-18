import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { TipoProduto } from "../../types/types";

export default function EditarProduto() {
  document.title = "Editar Produto";

  const navigate = useNavigate();
  const { id } = useParams<{id:string}>();

  const [produto, setProduto] = useState<TipoProduto>({} as { id: "", nome: "", preco: 0, estoque: 0 });

  useEffect( ()=> {
    
    const carregaProdutos = async () => {

      try{

        const response = await fetch(`http://localhost:3001/produtos/${id}`,{method: "GET"});

        if (!response.ok) {
          throw new Error(`Erro na recuperação do produto: ${response.status} - ${response.statusText}`);
        }

        const data: TipoProduto = await response.json();
        setProduto(data)

      }catch (error){
        console.error(error);
      }

    }

    carregaProdutos()

  },[]);

  return (
    <main>
        <h2>Editar Produto</h2>
       <form >
          <fieldset>
            <legend>Dados Produto</legend>
            <div>
              <label htmlFor="nome">Nome do produto</label>
              <input type="text" name="nome" id="nome" value={produto.nome} onChange={(event) => setProduto({...produto,nome:event.target.value}) }/>
            </div>
          </fieldset>
       </form>

    </main>
  )
}
