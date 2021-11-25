import React from 'react'
import { useCartContext } from '../context/CartContext'

export const TableCartFoot = ({total}) => {
    return (
        <>
            <tr>
                <th scope="row">Total</th>
                <td></td>
                <td></td>
                <td></td>
                <td className="fw-bold">$ARS {total}</td>
            </tr>
        </>
    )
}


export const TableCart = ({ item, nombre, cantidad, precio, subTotal }) => {

    const { clearItem } = useCartContext()

    return (
        <>
            <tr>
                <th scope="row">{item}</th>
                <td className="fw-bold text-capitalize">{nombre}</td>
                <td>{precio}</td>
                <td>{cantidad}</td>
                <td>$ARS {subTotal}</td>
                <td>
                    <button className="btn btn-danger p-0 d-flex align-items-center" onClick={()=>clearItem(item)}>
                        <box-icon name='x'></box-icon>
                    </button>
                </td>
            </tr>
        </>
    )
}
