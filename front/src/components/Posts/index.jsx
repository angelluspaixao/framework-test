import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import PostItem from './item'
import styles from './styles.module.scss'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get('posts').then(response => {
            setPosts(response.data)
        })
    }, [])

    return (
    <div>
        <h2>Posts</h2>

        <ul className={styles.postList}>
            {posts.map(post => {
                return (
                    <PostItem key={post.id} {...post} />
                )
            })}
        </ul>
    </div>
    )
}

export default Posts