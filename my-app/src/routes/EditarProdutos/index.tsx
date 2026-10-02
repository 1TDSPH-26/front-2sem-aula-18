import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../../types/types";
import { useNavigate } from "react-router";

const listaProdutos = [

  {id: 1, nome: "Produto-1", preco: 23.90 },
  {id: 2, nome: "Produto-2", preco: 99.10 },
  {id: 3, nome: "Produto-3", preco: 132.40 },
];

export default function EditarProduto() {
  document.title = "Editar Produto";

  const navigate = useNavigate();

  const { id } = useParams<{id:string}>();

  const [produto, setProduto] = useState<TipoProduto>({} as { id:"",nome:"",preco:0,estoque:0 });

  useEffect( ()=> {
    const carregaProduto = async () => {
      try {
        const response = await fetch(`http:localhost:3001/produtos/${id}`)

        if (!response.ok) {
          throw new Error(`Erro na recuperação do produto: ${response.status} - ${response.statusText}`);
        }

        const data: TipoProduto = await response.json();
        setProduto(data);

      } catch (error) {
        console.error(error);
      }
    }

    carregaProduto()

  },[]);

  return (
    <main>
        <h2>Editar Produtos</h2>
        <div>
          <form>
            <fieldset>
              <legend>Dados do produto</legend>
              <div>
                <label htmlFor="nome">Nome do produto</label>
                <input type="text" name="nome" id="nome" value={produto.nome} />
              </div>
            </fieldset>
          </form>
        </div>

    </main>
  )
}
