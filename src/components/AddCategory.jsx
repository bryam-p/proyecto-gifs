import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue])
            setInputValue("")
        }
    }

    return (
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-8 d-flex w-100 espaciado">
                <input type="text" list="test" className="form-control" placeholder="Escribe tu busqueda" value={inputValue} onChange={handleInputChange} />
                <datalist id="test">
                    <option value="Gatos" />
                    <option value="Perros" />
                    <option value="Peliculas" />
                    <option value="Juegos" />
                    <option value="Memes" />
                </datalist>
            </div>
            <div className="col-4 espaciado">
                <button className="btn-block btn-dark h-100 border-radius">Buscar gif</button>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
