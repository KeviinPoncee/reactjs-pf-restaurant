import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { TableCart, TableCartFoot } from '../TableCart'
import { FormBuy } from '../FormBuy'

export const CartContainer = () => {

    const { cartList, totalCart, clear } = useCartContext()
    const [form, setForm] = useState(false)

    const addForm = () => {
        setForm(true)
    }

    useEffect(() => {
        setForm(false)
    }, [cartList])

    return (
        <div className='mt-5 pt-5'>
            <div className="mt-5">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="fw-bold mb-2">~ Carrito de compras ~</h1>
                    {
                        cartList.length === 0 ?
                            <>
                                <h2 className="text-danger">El carrito se encuentra vacío</h2>
                                <box-icon
                                    class='cart-empty'
                                    name='cart-download'
                                    type='solid'
                                    animation='tada'
                                    size='cssSize' ></box-icon>
                                <Link to='/productos' className='btn btn-primary'>
                                    Realizá tu compra!
                                </Link>
                            </>
                            :
                            <>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Precio ud.</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Sub total</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            // cartList.map(e => console.log(e))
                                            cartList.map(prod =>
                                                <TableCart item={prod.id} nombre={prod.name} cantidad={prod.cantidad} precio={prod.price} subTotal={prod.subTotal} />
                                            )
                                        }
                                    </tbody>
                                    <tfoot>
                                        {
                                            <TableCartFoot total={totalCart()} />
                                        }
                                    </tfoot>
                                </table>
                                <div className="container d-flex justify-content-around">
                                    <Link to='/productos' className="btn btn-primary">Seguir comprando</Link>
                                    <button className="btn btn-danger" onClick={() => clear()}>Vaciar carrito</button>
                                    <button className="btn btn-success" onClick={addForm}>Finalizar compra</button>
                                </div>
                            </>
                    }
                </div>
                {
                    form ?
                    <div>
                        <h2 className="text-center mt-5">~ Finalizá tu compra! ~</h2>
                        <FormBuy total={totalCart()}/>
                    </div>
                    :
                    <>
                    </>
                }
            </div>
        </div>
    )
}
