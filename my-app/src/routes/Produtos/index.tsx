import { useState } from "react";
import { useNavigate } from "react-router";

export type TipoProduto = {
  id : string,
  nome : string,
  preco : number,
  estoque : number
}

export default function Produtos() {
  document.title = "Produtos";

  const navigate = useNavigate();

  const [produtos, setProdutos] = useState<TipoProduto>()
  return (
    <main>
        <h2>Produtos</h2>
    </main>
  )
}
