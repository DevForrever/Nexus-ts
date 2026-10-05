import { useState } from 'react'
import s from './Feedback.module.css'

type Option = 'good' | 'neutral' | 'bad'
type State = { good: number; neutral: number; bad: number }

const options: { ui: string; value: Option }[] = [
    { ui: 'Good', value: 'good' },
    { ui: 'Neutral', value: 'neutral' },
    { ui: 'Bad', value: 'bad' }
]

export function Feedback() {
    const [state, setState] = useState<State>({ good: 0, neutral: 0, bad: 0 })
    const { good, neutral, bad } = state
    const total = good + neutral + bad
    const increment = (item: Option) => setState((prev) => ({ ...prev, [item]: prev[item] + 1 }))

    return (
        <div className={s.container}>
            <h2 className={s.title}>Please leave feedback</h2>
            <div className={s.buttonBox}>
                {options.map(({ ui, value }) => (
                    <button className={s.button} key={value} onClick={() => increment(value)}>
                        {ui}
                    </button>
                ))}
            </div>
            <h2 className={s.title}>Stats</h2>
            {total > 0 ? (
                <ul className={s.ul}>
                    <li className={s.li}>Total: {total}</li>
                    <li className={s.li}>Good: {good}</li>
                    <li className={s.li}>Neutral: {neutral}</li>
                    <li className={s.li}>Bad: {bad}</li>
                    <li className={s.line}></li>
                    <li className={s.li}>Positive Feedbacks: {Math.round((good / total) * 100)}%</li>
                </ul>
            ) : (
                <h4 className={s.title}>There is no feedback</h4>
            )}
        </div>
    )
}
