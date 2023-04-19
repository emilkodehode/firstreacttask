import { Post } from "../post/Post"

import data from "../../data/articles.json"

import style from "./article.module.css"

export function Article(){
    return(
        <section className={style.articles}>
        {data.map(article=><Post key={article.slug} data={article}/>)}
        </section>
    )
}