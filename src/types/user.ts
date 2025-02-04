//Objeto que garante que os dados do usuario(propriedades) tenham os formatos corretos
export type UserProps = {

    avatar_url: string
    login: string
    location: string
    followers: number
    following: number

}

//Como esse arquivo não contem componentes jsx/React, a extensão dele é apenas "ts"