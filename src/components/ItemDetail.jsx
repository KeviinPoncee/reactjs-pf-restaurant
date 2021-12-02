import React from 'react'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';
import { ItemCountDetail } from './ItemCountDetail';

export const ItemDetail = ({img, nombre, descripcion, precio, id}) => {

    const {addToCart} = useCartContext()

    const onAdd = (count) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: `Se agregó ${count} items/s`
        })

        addToCart({
            id:id,
            name:nombre,
            price:precio,
            cantidad:count,
            subTotal:count*precio
        })
	}

    // console.log(cartList);

    return (
        <div className="card w-75 mx-auto p-3" id={id}>
                <Link to="/productos" className="btn btn-outline-danger position-absolute top-0 end-0 d-flex justify-content-center">
                    <box-icon className="w-75" name='exit'></box-icon>
                </Link>
                <img src={`${img}`} className="card-img-top w-50 mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-2 text-capitalize text-center bg-success p-2 text-dark bg-opacity-25">{nombre}</h5>
                    <p className="card-text text-capitalize fw-bold">{descripcion}</p>
                    <h3 className="card-text fw-bold">$ {precio}</h3>
                    <div className="container d-flex justify-content-center">
                        <img src="https://github.com/KeviinPoncee/reactjs-pf-restaurant/blob/gh-pages/assets/images/medios-de-pagos.png?raw=true" alt="" className="w-50"/>
                    </div>
                    <ItemCountDetail initial={1} onAdd={onAdd}/>
                </div>
        </div>
    )
}
