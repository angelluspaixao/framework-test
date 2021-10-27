import { useEffect, useState } from 'react'
import { api } from "../services/api"
import styles from './styles.module.scss'
import ToDoItem from './item'

const ToDos = () => {
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        api.get('users/1/todos').then(response => {
            setToDos(response.data)
        })
    }, [])

    return (
        <div>
            <h2>To Dos</h2>

            <ul className={styles.toDoList}>
                {toDos.map(toDo => {
                    return (
                        <ToDoItem key={toDo.id} {...toDo} />
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDos