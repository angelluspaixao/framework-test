import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const ToDoItem = (props) => {
    const [completed, setCompleted] = useState(props.completed)

    const toDoClick = () => {
        setCompleted(!completed)
    }

    return (
        <li key={props.id} className={completed ? styles.toDoDone : styles.toDoUndone} onClick={toDoClick}>
            <h3 className={styles.toDoTitle}>{props.title}</h3>
        </li>
    )
}

export default ToDoItem