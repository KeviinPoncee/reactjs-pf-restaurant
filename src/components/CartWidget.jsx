import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

export const CartWidget = () => {
    const {itemsCarrito} = useCartContext()

    return (
        <Link to='/cart' className='btn btn-outline-success d-flex align-items-center'>
            <box-icon type='solid' name='cart-alt'></box-icon>
            <span className="ms-2 me-1 fw-bold text-dark">{itemsCarrito()}</span>
        </Link>
    )
}
