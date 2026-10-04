import { useNewsQuery } from './query'
import s from './News.module.css'

export function News() {
    const { data, isPending, error } = useNewsQuery()
    return (
        <div>
            <h2 className={s.title}>News</h2>
            <div>
                {isPending && <p>Loading...</p>}
                {error && <p>{error.message}</p>}
                <h4 className={s.text}>{data?.articles && data.articles[0]?.title}</h4>
            </div>
        </div>
    )
}
