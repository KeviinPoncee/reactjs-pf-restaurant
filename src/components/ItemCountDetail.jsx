import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const InputCart = ({addItem}) => {
    return (
        <button onClick={addItem} className="btn btn-success">Agregar al carrito</button>
        )
    }
const InputBuy = () => {
    return (
        <Link to='/cart' className="btn btn-success">Terminar Compra</Link>
    )
}

export const ItemCountDetail = ({initial, onAdd}) => {
    const [countItem, setCountItem] = useState(initial)
    const [stockItem] = useState(15)
    const [inputType, setInputType] = useState('input')

    const handleInput = (e) => {
        setInputType('buy')
        e.preventDefault()
    }

    // INCREMENTO DE ITEM
    const increaseCount = () => {
        if (countItem >= stockItem) {
            setCountItem(stockItem)
        } else {
            setCountItem(countItem + 1)
        }
    }

    // DECREMENTO DE ITEM
    const decreaseCount = () => {
        if (countItem <= initial) {
            setCountItem(initial)
        } else {
            setCountItem(countItem - 1)
        }
    }

    // AGREGADO AL CARRITO
    const addItem = () => {
        onAdd(countItem)
        setCountItem(initial)
    }
    return (
        <div className="card-footer bg-light text-center">
            <div className="d-flex justify-content-between align-items-center p-2 m-2 border rounded">
                <button onClick={decreaseCount} className="btn btn-secondary fw-bold fs-5 ps-3 pe-3">-</button>
                <span>{countItem}</span>
                <button onClick={increaseCount} className="btn btn-secondary fw-bold fs-5 ps-3 pe-3">+</button>
            </div>
            <div className="d-flex justify-content-center" onClick={handleInput}>
                {
                    inputType === 'input' ? <InputCart addItem={addItem}/> :
                                            <InputBuy/>
                }
            </div>
        </div>
    )
}
