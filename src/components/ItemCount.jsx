import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ItemCount = ({initial, id, idNumber, onAdd}) => {

    const [countItem, setCountItem] = useState(initial)
    const [idItem] = useState(idNumber)
    const [stockItem] = useState(15)

    /* INCREMENTO DE ITEM */
    const increaseCount = () => {
        if (countItem >= stockItem) {
            setCountItem(stockItem)
        } else {
            setCountItem(countItem + 1)
        }
    }

    /* DECREMENTO DE ITEM */
    const decreaseCount = () => {
        if (countItem <= initial) {
            setCountItem(initial)
        } else {
            setCountItem(countItem - 1)
        }
    }

    /* AGREGADO AL CARRITO */
    const addItem = () => {
        onAdd(countItem, idItem)
        setCountItem(initial)
    }

    return (
        <div className="card-footer bg-light text-center">
            <div className="d-flex justify-content-between align-items-center p-2 m-2 border rounded">
                <button onClick={decreaseCount} className="btn btn-secondary fw-bold fs-5 ps-3 pe-3">-</button>
                <span>{countItem}</span>
                <button onClick={increaseCount} className="btn btn-secondary fw-bold fs-5 ps-3 pe-3">+</button>
            </div>
            <div className="d-flex justify-content-around">
                <Link to={`/detalle/${id}`} className="btn btn-primary p-1">Detalles</Link>
                <button onClick={addItem} className="btn btn-success p-1">Agregar al carrito</button>
            </div>
        </div>
    )
}
