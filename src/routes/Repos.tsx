import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//Type
import { RepoProps } from "../types/Repos"

//Components
import BackBtn from "../components/BackBtn"
import Loader from "../components/Loader"
import Repo from "../components/Repo"

//Module css
import classes from "./Repos.module.css"

const Repos = () => {

  //Nome do usuário, capturado na url, é inserido dentro da variável 'username'
  const { username } = useParams()

  //'repos' recebe os valores do objeto RepoPros(array), recebe um array vazio(caso o usuario nao tenha repositorio), ou recebe valor nulo
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const loadRepos = async function (username: string) {

      setIsLoading(true)

      const res = await fetch(`https://api.github.com/users/${username}/repos`)

      const data = await res.json()

      setIsLoading(false)

      //Utilizei o sort para organizar os repositórios em ordem decrescente
      let orderedRepos = data.sort(

        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count

      )

      //Buscar apenas do zero ao 6
      orderedRepos = orderedRepos.slice(0, 6)

      //Após dados da API coletados, e organizados nos 6 melhores, os dados correspondentes ao objeto 'RepoProps' serão inseridos dentro de 'repos'
      setRepos(orderedRepos)

    }

    if (username) {
      loadRepos(username)
    }

  }, [])

  //Se ainda não existir dados em 'repos' e 'isLoading' for true, então retornar o component 'Loader'
  if (!repos && isLoading) return <Loader />


  return (

    <div className={classes.repos}>
      <BackBtn />
      <h2>Explore os repositórios de {username}</h2>

      {/*O && avalia a primeira condição, caso seja verdadeira, passa a avaliar se a proxima condição também é valida */}
      {repos && repos.length === 0 && <p>Não há repositórios nessa conta</p>}

      {/*Ao chamar o component 'Repo', e renderizar seu conteudo na tela, primeiro usamos a key para identificar os elementos unicos, como o nome de cada um deles 'key={repo.name}'  depois passamos todas as propriedades do objeto 'Repo' como props '{...repo}' */}
      {repos && repos.length > 0 && (
        <div className={classes.repos_container}>
          {repos.map((repo: RepoProps) => (
            <Repo key={repo.name} {...repo}/>
          ))}
        </div>

        

      )}
    </div>

  )


}

export default Repos