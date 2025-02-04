
//Tipando uma propriedade chamada loadUser.
//loadUser é um função assincrona que tem como argumento a string "userName"
//A função retorna uma promisse<void>, pois não retorna nenhum valor, apenas a executa uma busca
type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}



//Icons
import { BsSearch } from "react-icons/bs"

//Hooks
import { useState, KeyboardEvent } from "react"

//Modules.css
import classes from './Search.module.css'


const Search = ({ loadUser }: SearchProps) => {

  const [userName, setUserName] = useState("")

  //Função para buscar com a tecla Enter
  const searchEnter = (e: KeyboardEvent) => {

    if(e.key === "Enter") {

      loadUser(userName)

    }

  }

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>

        {/* Quando o valor do input alterar, inserir este novo valor dentro de setUserName */}
        <input 
          type="text"
          placeholder='Digite o nome do usuário'
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={searchEnter}
        />

        {/* Quando o botão for clicado, inserir valor atual de "userName" dentro do argumento da função loadUser */}
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>

      </div>
    </div>
  )
}

export default Search