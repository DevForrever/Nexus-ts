import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import close from '../../assets/close.svg'
import s from './Todolist.module.css'

type Props= {
    addTodo: (text: string) => void
    toggleModal: () => void
}

export function Modal({ addTodo, toggleModal }: Props) {
    const [text, setText] = useState('')

    useEffect(() => {
        const keyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                toggleModal()
            }
        }
        window.addEventListener('keydown', keyDown)
        return () => {
            window.removeEventListener('keydown', keyDown)
        }
    }, [toggleModal])

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
        addTodo(text)
        setText('')
        toggleModal()
    }

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            toggleModal()
        }
    }

    return createPortal(
        <div onClick={closeModal} className={s.backdrop}>
            <div className={s.card}>
                <form onSubmit={handleSubmit}>
                    <label className={s.label}>Enter text for the note</label>
                    <div className={s.todobox}>
                        <input className={s.input} required value={text} onChange={(e) => setText(e.target.value)} />
                        <button className={s.modalButton} type='submit'>
                            Save
                        </button>
                    </div>
                </form>
                <button onClick={toggleModal} className={s.closeModal}>
                    <img src={close} alt='Close' />
                </button>
            </div>
        </div>,
        document.body
    )
}
