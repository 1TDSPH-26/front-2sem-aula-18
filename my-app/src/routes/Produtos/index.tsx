import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";
import { Link, useNavigate } from "react-router";
import { FaEdit as Editar } from "react-icons/fa";
import { MdDeleteOutline as Deletar } from "react-icons/md";


export default function Produtos() {
  document.title = "Produtos";

  const navigate = useNavigate()

  const[produtos,setProdutos] = useState<TipoProduto[]>([]);

  useEffect(() => {

    const carregaProdutos = async () => {

      try{
        const resposta = await fetch("http://localhost:3001/produtos");

        if(!resposta.ok){
          throw new Error("Erro na listagem dos produtos!");
        }

        const data:TipoProduto[] = await resposta.json();
        setProdutos(data);
        

      }catch (error) {
        console.error(error);

      }
      
    }

    carregaProdutos();

  },[]);

  const handleDelete = async (id:string) =>{
    try{
      const resposta = await fetch(`http://localhost:3001/produtos/${id}`, {
          method:"DELETE"
      });
      //Error
      if(!resposta.ok) {
        throw new Error(`Ocorreu um erro na exclusão do produto: ${resposta.status} - ${resposta.statusText}`)
      }

      //Sucess
      alert("Produto excluido")
      //Redirect
      navigate("/")



    }catch (error){
      console.error(error);
    }
  }

  return (
    <main>
        <h2>Produtos</h2>
        <div>
          <table border={1} style={{borderCollapse:"collapse"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>ESTOQUE</th>
                <th>AÇOES</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map( (produto)=>(
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.preco}</td>
                  <td>{produto.estoque}</td>
                  <td> 
                    <Link to={`/editar-produto/${produto.id}`}> <Editar/> </Link>
                    | 
                    <Link to="#" onClick={() => handleDelete(produto.id)}><Deletar /></Link>
                    </td>
                </tr>
              ) )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>Quantidade de produtos: {produtos.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>
    </main>
  )
}
