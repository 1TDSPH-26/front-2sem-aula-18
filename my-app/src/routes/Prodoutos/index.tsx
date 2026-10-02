import { useEffect, useState } from "react"
import type { tipoProduto } from "../../types/tipoProduto"
import { Link, useNavigate } from "react-router";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";



export default function Produtos() {
    document.title = "Produtos";

    

    const navigate = useNavigate()


    const [produto, setProduto] = useState<tipoProduto[]>([]);

    useEffect(() => {

        const carregarProdutos = async () => {
           try{
                const response = await fetch("http://localhost:3001/produtos");
        
                if(!response.ok) {
                throw new Error("Erro ao carregar produtos");
            }
            

            const data: tipoProduto[] = await response.json();
            setProduto(data);
           }catch (error) {
                console.log("Erro ao carregar produtos");
           } 
        }
            

        carregarProdutos();
    }, []);

    const handleDelete = async (id: string) => {
        try {

            const resposta = await fetch(`http://localhost:3001/produtos/${id}`, {
                method: "DELETE"
            });
            
            if(!resposta.ok){
                throw new Error(`Ocorreu o erro na exclusão do produto: ${resposta.status} - ${resposta.statusText}`)
            }

            alert(`Produto excluido com seucesso`)
            navigate("/produtos")
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div>
            <h1>Produtos </h1>
            <div>
                <table border={1} style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produto.map((prod) => (
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.nome}</td>
                                <td>{prod.preco}</td>
                                <td>{prod.estoque}</td>
                                <td>
                                    <Link to={`/editar-produto/${prod.id}`}> <FaEdit/> | </Link>
                                    <Link to="#" onClick={() => handleDelete(prod.id)} > <FaRegTrashAlt/> </Link>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>Total de Produtos: {produto.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
