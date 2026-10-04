import { useId } from 'react'
import { usePokemonsQuery } from './query'
import s from './Pokemons.module.css'

export function Pokemons() {
    const id = useId()
    const { data, isPending, error } = usePokemonsQuery()

    return (
        <section>
            <form>
                <h2 className={s.title}>Pokemons</h2>
                <h4 className={s.text}>Find pokemon by name</h4>
                <div className={s.formBox}>
                    <label htmlFor={id}>
                        <input placeholder='Search Pokemons...' className={s.input} id={id} />
                    </label>
                    <button type='submit' className={s.button}>
                        Search
                    </button>
                </div>
            </form>
            {data && (
                <div className={s.pokemonBox}>
                    <img src={data.sprites.front_default} alt='' />
                    <h2>{data.name}</h2>
                </div>
            )}
            {isPending && <p>Loading...</p>}
            {error?.message && <p>{error.message}</p>}
        </section>
    )
}
