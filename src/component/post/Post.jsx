import style from "./post.module.css"

export function Post(prop){
    const {data} = prop
    return(
        <div className={style.post}>
        <div className={style.posthead}>
            <div>
            <img src={data.author.image} alt="picture of the author of the article/post" />
            </div>
            <h4>{data.author.username}</h4>
            <h4>{data.favoritesCount}</h4>
        </div>
        <div className={style.postbody}>
            <h2>{data.title}</h2>
            <h3>{data.body}</h3>

        </div>
        <div className={style.postfooter}>
            <h5>{data.createdAt}</h5>
            <ul className={style.tags}>{data.tagList.map(tag=><li key={tag}>{tag}</li>)}</ul>
        </div>
        </div>
    )
}