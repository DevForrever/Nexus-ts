import { useState } from 'react'
import { usePhonebookQuery } from './query'
import s from './Phonebook.module.css'

export function Contacts() {
    const { data, mutateDeleteContact } = usePhonebookQuery()
    const [filter, setFilter] = useState('')
    const filteredContacts = data?.filter(({ name }: { name: string }) =>
        name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            <h2 className={s.contacts}>Contacts</h2>
            <h3>Find contacts by name</h3>
            <input
                className={s.inputSearch}
                placeholder='Search Contacts...'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul className={s.contacts__list}>
                {filteredContacts?.map(({ name, number, id }) => (
                    <li key={id} className={s.list__item}>
                        {name}: {number}
                        <button className={s.button} onClick={() => mutateDeleteContact(id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
