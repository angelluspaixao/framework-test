import { useEffect, useState } from 'react'
import { api } from '../services/api'
import styles from './styles.module.scss'

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        api.get('albums').then(async ({data: responseAlbums}) => {
            const promises= []
            const albums = []

            responseAlbums.forEach(album => {
                const promise = api.get(`albums/${album.id}/photos`).then(({
                    data: albumPhotos}) => {
                        const [firstPhoto] = albumPhotos
                        const {url, thumbnailUrl}  = firstPhoto

                        albums.push({
                            ...album,
                            firstPhoto: {
                                url,
                                thumbnailUrl
                            }
                        })
                    })
                promises.push(promise)
            })
            await Promise.all(promises)
            setAlbums(albums)
        })
    }, [])

    const albumClick = () => {
        alert('Você abriria o álbum agora');
    }

    return (
        <div>
            <h2>Albums</h2>

            <ul className={styles.albumList}>
            {albums.map(album => {
                return (
                    <li key={album.id} className={styles.album} onClick={albumClick}>
                        <img 
                            className={styles.albumThumb}
                            src={album.firstPhoto.thumbnailUrl}
                        />
                        <p className={styles.albumTitle}>{album.title}</p>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Albums