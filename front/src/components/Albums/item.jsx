import { useState } from 'react'
import styles from './styles.module.scss'

const AlbumItem = (props) => {
    const [album, setAlbum] = useState(props)
    
    const albumClick = () => {
        alert('Você abriria o álbum agora');
    }

    return (
        <li key={album.id} className={styles.album} onClick={albumClick}>
            <img 
                className={styles.albumThumb}
                src={album.firstPhoto.thumbnailUrl}
            />
            <p className={styles.albumTitle}>{album.title}</p>
        </li>
    )
}

export default AlbumItem