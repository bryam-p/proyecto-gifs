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
                <input type="text" className="form-control" placeholder="Escribe tu busqueda" value={inputValue} onChange={handleInputChange} />
            </div>
            <div className="col-4 espaciado">
                <button className="btn-block btn-dark h-100 border-radius">Buscar gif</button>
            </div>
            <h3>{inputValue}</h3>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
