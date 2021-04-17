import React from 'react'

const GifGridItem = (props) => {
    console.log(props)
    return (
            <div className="card ancho-tarjeta shadow p-3 mb-3 bg-white rounded" >
                <img src={props.url} className="card-img-top" alt="holi" />
                <div className="card-body text-center">
                    <span className="h5">{props.title}</span>
                </div>
            </div>
    )
}

export default GifGridItem
