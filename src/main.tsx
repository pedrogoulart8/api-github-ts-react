import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//createBrowserRouter permite que eu configure minhas rotas
//RouterProvider permite que eu utilize a minha confg de rotas dentro do projeto
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Rotas
import Home from './routes/Home.tsx'
import Repos from './routes/Repos.tsx'

//Configurando as rotas
const router = createBrowserRouter([

  {
    //Rota raiz, componente principal que se repete em todas as paginas
    path: "/",
    element: <App />,

    //sub-rotas
    //Quando a url for "/", será renderizado o componente Home
    
    children: [
      {
        path: "/api-github-ts-react/",
        element: <Home />,
      },

      /* ':username' é um parametro dinamico que irá capturar o nome do usuario e será usado na rota 'Repos' */
      {
        path: "/api-github-ts-react/repos/:username",
        element: <Repos />
      }
    ]
  }

])

//RouterProvider habilita o roteamento. router={router} fornece a configuração de rotas que eu criei

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
