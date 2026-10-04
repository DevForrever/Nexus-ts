import { Form } from './Form'
import { Contacts } from './Contacts'
import s from './Phonebook.module.css'

export function Phonebook() {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Phonebook</h2>
            <Form />
            <Contacts />
        </div>
    )
}