//Importando tipagem
import { UserProps } from "../types/user"

//Components
import Search from "../components/Search"
import User from "../components/User"
import Error from "../components/Error"
import Loader from "../components/Loader"

//Hooks
import { useState } from "react"



const Home = () => {

  //O estado do hook é nulo ou recebe os dados do usuario do objeto "UserProps"
  const [user, setUser] = useState<UserProps | null>(null)

  const [error, setError] = useState(false)
  const [ isLoading, setIsLoading] = useState(false)



  //Função assincrona responsável por buscar o usuario na API do github, inserir dentro de "data" e transformar em formato json
  //O usuario irá preencher o nome no input e este valor será usado como argumento desta função
  const loadUser = async (userName: string) => {

    //A função já deve iniciar com os valores originais para evitar erros de busca
    setError(false)
    setUser(null)
    setIsLoading(true)

    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()

    setIsLoading(false)

    //Se o usuario nao for encontrar, const 'error' recebe 'true' e a função retorna sem continuar sua lógica restante
    if (res.status === 404) {

      setError(true)
      return

    }


    //Extraindo as propriedades de 'data' que eu quero e criando váriaveis com o mesmo nome (desestruturação)
    const { avatar_url, login, location, followers, following } = data

    //Objeto criado com as variáveis coletadas de data. Estas variáveis contém os dados do usuário, coletado pela API
    const userData: UserProps = {

      avatar_url,
      login,
      location,
      followers,
      following

    }

    

    //Inserindo o objeto 'userData' dentro do hook 'user'
    setUser(userData)

    setIsLoading(false)

  }


  return (
    <div>
      {/* Recebendo a prop 'loadUser' e inserindo como argumento a função assincrona 'loadUser' */}
      <Search loadUser={loadUser} />

      {isLoading && <Loader />}
      {error && <Error />}

      {/* Caso exista 'user'(objeto de dados extraidos da API), inserir o component 'User' e todos seus argumentos desestruturados */}
      {user && <User {...user} />}
      

    </div>
  )
}

export default Home