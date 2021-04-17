import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs()
    }, [])

    console.log(category)

    const getGifs = async () => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=20&api_key=pH6Xy9jt2HfuPKrOpDs5NR0mODR8M69d`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs)
        setImages(gifs)
    }

    return (
        <>
            <h3 className="w-100 text-center"><span class="badge badge-dark">{category}</span></h3>
            {
                images.map(img => ( //desestructuracion 
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </>
    )
}

export default GifGrid
