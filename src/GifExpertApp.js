import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'


function GifExpertApp() {

    const [categories, setCategories] = useState(['Gatos'])

    // const handleAdd = () => {
    //     setCategories( [...categories , "Dragon" ])
    // }


    return (
        <div className="container mt-5">
            {/* <button className="btn btn-dark" onClick={handleAdd} >Agregar</button> */}
            <h2 className="titulo-fuente ">GifExpert</h2>
            <br></br>
            <div className="row">
                <div className="col-12">
                <AddCategory setCategories={setCategories} />
                </div>
            </div>
            <hr />

            <div className="card-columns" >
                {
                    categories.map((category =>
                        <GifGrid key={category} category={category} />
                    ))
                }
            </div>

        </div>
    )
}

export default GifExpertApp

