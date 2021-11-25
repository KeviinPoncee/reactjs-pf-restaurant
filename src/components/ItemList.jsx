import React, { memo } from 'react'
import Swal from 'sweetalert2';
import { useCartContext } from '../context/CartContext';
import { Item } from './Item';
import { ItemCount } from './ItemCount';

// callback             callback con comparacion
// memo(() => {}) || memo( ()=>{}, ()=>{})

export const ItemList = memo(({ productos }) => {

    const { addToCart } = useCartContext()

    const onAdd = (count, idItem) => {
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

        // console.log(productos.find(prod => prod.idNumber === idItem).idNumber);
        
        addToCart({
            id: productos.find(prod => prod.idNumber === idItem).idNumber,
            name: productos.find(prod => prod.idNumber === idItem).title,
            price: productos.find(prod => prod.idNumber === idItem).precio,
            cantidad: count,
            subTotal: count * productos.find(prod => prod.idNumber === idItem).precio
        })
    }

    // console.log 
    // console.log(productos);
    // console.log 

    return (
        <div className="containerProducts d-flex flex-wrap justify-content-center">
            {
                productos.map(producto =>
                    <div className="product-card card bg-light me-1 ms-1 mb-3 rounded-3 p-2">
                        <Item img={producto.image} nombre={producto.title} descripcion={producto.descripcion} precio={producto.precio} id={producto.idNumber} />
                        <ItemCount initial={1} id={producto.id} idNumber={producto.idNumber} onAdd={onAdd} />
                    </div>
                )
            }
        </div>
    )
}
    , (prevProp, nextProp) => prevProp.productos.length === nextProp.productos.length)

