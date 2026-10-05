import { useState, useId, type SubmitEvent } from 'react'
import { usePokemonsQuery } from './query'
import s from './Pokemons.module.css'

export function Pokemons() {
    const id = useId()
    const [value, setValue] = useState('')
    const [searchName, setSearchName] = useState('')
    const { data, isPending, error } = usePokemonsQuery(searchName)

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchName(value.trim().toLowerCase())
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2 className={s.title}>Pokemons</h2>
                <h4 className={s.text}>Find pokemon by name</h4>
                <div className={s.formBox}>
                    <label htmlFor={id}>
                        <input
                            placeholder='Search Pokemons...'
                            className={s.input}
                            id={id}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </label>
                    <button type='submit' className={s.button}>
                        Search
                    </button>
                </div>
            </form>
            {data && (
                <div className={s.pokemonBox}>
                    {data.sprites.front_default && <img src={data.sprites.front_default} alt={data.name} />}
                    <h2>{data.name}</h2>
                </div>
            )}
            {searchName && isPending && <p>Loading...</p>}
            {error?.message && <p>{error.message}</p>}
        </section>
    )
}
