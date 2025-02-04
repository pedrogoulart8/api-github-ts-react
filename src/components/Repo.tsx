//Tipagem em objeto
import { RepoProps } from "../types/Repos"


//icons
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";


import classes from "./repo.module.css"


const Repo = ({ name, html_url, language, stargazers_count, forks_count }: RepoProps) => {
    return (
        <div className={classes.repo}>
            <h2>{name}</h2>
            <p className={classes.language}>
                <BsCodeSlash />
                {language}
            </p>
            <div className={classes.stats}>
                <div>
                    <AiOutlineStar />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </div>
            <a className={classes.repo_btn} href={html_url} target="_blank" >
                <span>
                    Ver código
                </span>
                <RiGitRepositoryLine />
            </a>
        </div>
    )
}

export default Repo