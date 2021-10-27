import { useState} from 'react'
import styles from './styles.module.scss'

const PostItem = (props) => {
    const [post, setPost] = useState(props)

    const postClick = () => {
        alert('Você abriria a postagem agora');
    }

    return (
        <li key={post.id} className={styles.post} onClick={postClick}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postContent}>{post.body}</p>
        </li>
    )
}

export default PostItem