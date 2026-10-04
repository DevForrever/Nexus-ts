import type { ReactNode } from 'react'
import s from './Feedback.module.css'

export function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section>
            <h2 className={s.title}>{title}</h2>
            {children}
        </section>
    )
}
