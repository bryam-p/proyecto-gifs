import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category) // despues de data se coloca : para renombrar

    return (
        <>
            {loading && <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>}

            {
                images.map((img, index) => { //desestructuracion 
                    return <a href={img.url_origin} target='origin'><GifGridItem key={index} {...img} /></a>  //Igual que img = {img} envia cada una de las propiedades de la imagen
                })
            }
        </>
    )
}

export default GifGrid
