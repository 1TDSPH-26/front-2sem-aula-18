import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Prodoutos/index.tsx'
import EditarProdutos from './routes/EditarProduto/index.tsx'


const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <Error/>,children:[
    {path:"/", element:<Home/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"/editar-produto/:id", element:<EditarProdutos/>},
  ]},
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
