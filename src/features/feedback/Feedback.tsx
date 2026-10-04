import { useState } from 'react'
import { Section } from './Section'
import s from './Feedback.module.css'

const options = ['Good', 'Neutral', 'Bad']

interface State {
    good: number
    neutral: number
    bad: number
}

export function Feedback() {
    const [state, setState] = useState<State>({ good: 0, neutral: 0, bad: 0 })
    const { good, neutral, bad } = state
    const total = good + neutral + bad
    const positivePercentage = ((good / total) * 100).toFixed() + '%'
    const handleIncrement = (item: string) => {
        setState((prev) => ({ ...prev, [item]: prev[item] + 1 }))
    }

    return (
        <div className={s.container}>
            <Section title='Please leave feedback'>
                <div className={s.buttonBox}>
                    {options.map((item) => (
                        <button className={s.button} key={item} onClick={() => handleIncrement(item.toLowerCase())}>
                            {item}
                        </button>
                    ))}
                </div>
            </Section>
            <Section title='Statistic'>
                {total > 0 ? (
                    <ul className={s.ul}>
                        <li className={s.li}>Total: {total}</li>
                        <li className={s.li}>Good: {good}</li>
                        <li className={s.li}>Neutral: {neutral}</li>
                        <li className={s.li}>Bad: {bad}</li>
                        <li className={s.line}></li>
                        <li className={s.li}>Positive Feedbacks: {positivePercentage}</li>
                    </ul>
                ) : (
                    <h4 className={s.title}>There is no feedback</h4>
                )}
            </Section>
        </div>
    )
}
