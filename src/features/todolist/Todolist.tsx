import { useState } from 'react'
import { Modal } from './Modal'
import s from './Todolist.module.css'

type Todo = {
    id: string
    completed: boolean
    text: string
}

export function Todolist() {
    const [filter, setFilter] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])
    const [showModal, setShowModal] = useState(false)

    const filteredTodos = todos.filter((item) => item.text.toUpperCase().includes(filter.toUpperCase()))

    const toggleModal = () => {
        setShowModal((prevShowModal) => !prevShowModal)
    }

    const deleteTodo = (id: string) => {
        setTodos((prev) => prev.filter((item) => item.id !== id))
    }

    const addTodo = (text: string) => {
        if (todos.some((item) => item.text.trim().toLowerCase() === text.trim().toLowerCase())) {
            alert('This todo already exists')
            return
        }

        const newTodo = { text, id: crypto.randomUUID(), completed: false }
        setTodos((prevTodos) => [newTodo, ...prevTodos])
    }

    const toggleCheckBox = (id: string) => {
        setTodos((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    }

    return (
        <section className={s.section}>
            <h2 className={s.title}>Todos</h2>
            <button onClick={toggleModal} className={s.button}>
                Add Todo
            </button>
            <input
                placeholder='Search Todos...'
                className={s.input}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul className={s.ul}>
                {filteredTodos.map((item) => (
                    <li key={item.id} className={s.inputBox}>
                        <input
                            type='checkbox'
                            className={s.checkBox}
                            checked={item.completed}
                            onChange={() => toggleCheckBox(item.id)}
                        />
                        <p className={s.text}>{item.text}</p>
                        <button className={s.deleteButton} onClick={() => deleteTodo(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            {showModal && <Modal addTodo={addTodo} toggleModal={toggleModal} />}
        </section>
    )
}
