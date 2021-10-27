import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

const Navigator = () => {
    return (
        <nav className={styles.navigator}>
            <Link to='/' className={styles.navigatorItem}>Postagens</Link>
            <Link to='/albums' className={styles.navigatorItem}>Álbuns</Link>
            <Link to='/todos' className={styles.navigatorItem}>Tarefas</Link>
        </nav>
    )
}

export default Navigator