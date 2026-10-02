import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../../Types/types";

export default function EditarProduto(){
    document.title = "Editar Produto";
    
    const{id} = useParams<{id:string}>();

    const [produto, setProduto] = useState<TipoProduto>({} as { id: "", nome: "", preco: 0, estoque: 0 });



    useEffect(() => {
        
    }, []);

    return(
        <main>
            <h2>Editar Produtos</h2>
            <p>ID : {id}</p>

            <div>
                {produto ? 
                    (
                        <div>
                            <p>Nome: {produto.nome}</p>
                            <p>Preco: {produto.preco}</p>
                        </div>
                    ):
                    (
                        (<p>Produto não encontrado</p>)
                    )
                }
            </div>
        </main>
    )
}
