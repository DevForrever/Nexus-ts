import { useAuthStore } from '../features/auth/store'
import { Feedback } from '../features/feedback/Feedback'
import { News } from '../features/news/News'
import { Phonebook } from '../features/phonebook/Phonebook'
import { Pokemons } from '../features/pokemons/Pokemons'
import { Todolist } from '../features/todolist/Todolist'

export function App() {
    const { isRefreshing } = useAuthStore()

    return isRefreshing ? (
        <p>Loading...</p>
    ) : (
        <div className='container'>
            <Feedback />
            <Phonebook />
            <Todolist />
            <Pokemons />
            <News />
        </div>
    )
}
