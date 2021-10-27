import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import styles from './styles.module.scss'

import AlbumItem from './item'

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

    return (
        <div>
            <h2 className={styles.title}>Albums</h2>

            <ul className={styles.albumList}>
            {albums.map(album => {
                return (
                    <AlbumItem key={album.id} {...album}/>
                )
            })}
        </ul>
        </div>
    )
}

export default Albums