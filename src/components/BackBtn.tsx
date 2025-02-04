import { useNavigate } from "react-router-dom"

import classes from "./BackBtn.module.css"

const BackBtn = () => {

    //Utilizado useNavigate para inserir uma volta de página após o clique no botão abaixo
    const navigate = useNavigate()

  return (

    <>
        <button className={classes.back_btn} 
        onClick={() => navigate(-1)}>
          Voltar
          </button>
    </>

  )
}

export default BackBtn