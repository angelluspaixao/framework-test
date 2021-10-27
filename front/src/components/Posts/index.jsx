import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import styles from './styles.module.scss'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get('posts').then(response => {
            setPosts(response.data)
        })
    }, [])

    const postClick = () => {
        alert('Você abriria a postagem agora');
    }

    return (
    <div>
        <h2>Posts</h2>

        <ul className={styles.postList}>
            {posts.map(post => {
                return (
                    <li key={post.id} className={styles.post} onClick={postClick}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postContent}>{post.body}</p>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}

export default Posts