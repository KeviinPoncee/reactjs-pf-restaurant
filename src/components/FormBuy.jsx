import React from 'react'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { useCartContext } from '../context/CartContext'
import { getFirestore } from '../services/getFirestore'
import firebase from "firebase";
import 'firebase/firestore'

export const FormBuy = ({ total }) => {

    const { clear, itemsCarrito, cartList } = useCartContext()

    //register - propiedades del formulario
    //HandleSubmit - recibe el evento con los datos del formulario
    // formSate - errores
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    //ENVIO DE FORMULARIO
    const onSubmit = data => {

        // Generar orden de compra
        const orden = {
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            buyer: {
                name: `${data.name} ${data.lastName}`,
                phone: data.phone,
                email: data.mail
            },
            items: cartList,
            cantidadItems: itemsCarrito(),
            total: total
        }

        // envio de orden de compra al firebase
        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(orden)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Compra realizada con éxito',
                    html:`
                        <h3>Orden de compra: ${res.id}</h3>
                        <hr>
                        <h4>Comprador: ${data.name} ${data.lastName}</h4>
                        <h4>Telefono: ${data.phone}</h4>
                        <h4>Mail: ${data.mail}</h4>
                        <hr>
                        <h4 class="d-flex align-items-center justify-content-center">
                            <box-icon color='green' name='badge-dollar' type='solid' animation='tada' flip='vertical' ></box-icon> Pagado: $ ${total} ARS
                        </h4>
                        <hr>
                    `
                })
            })
            .catch(err => console.log(err))
            .finally(() => {
                console.log(orden);
                clear()
                reset()
            })

        /* Modificar campos
        dbQuery.colecction('productos').doc('id del producto').update({
            // ~Ejemplo modificar stock~
            stock: 9
        }) */
    }




    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="border shadow-lg p-3 mb-5 bg-body rounded" id='myForm'>
                <div className="d-flex flex-column align-items-center">
                    <label htmlFor="name" className="mt-3 fs-3">Nombre:</label>
                    <input className="w-75 text-center rounded-pill border-1" autoFocus type="text" placeholder="Ingrese su nombre" {...register('name', {
                        required: {
                            value: true,
                            message: 'El campo es requerido'
                        }
                    })} />
                    {
                        errors.name && <span className="text-danger">{errors.name.message}</span>
                    }
                    <label htmlFor="lastName" className="mt-3 fs-3">Apellido:</label>
                    <input className="w-75 text-center rounded-pill border-1" type="text" placeholder="Ingrese su Apellido" {...register('lastName', {
                        required: {
                            value: true,
                            message: 'El campo es requerido'
                        }
                    })} />
                    {
                        errors.lastName && <span className="text-danger">{errors.lastName.message}</span>
                    }
                    <label htmlFor="phone" className="mt-3 fs-3">Telefono:</label>
                    <input className="w-75 text-center rounded-pill border-1" type="number" placeholder="Tel: +54 11-2222-3333" {...register('phone', {
                        required: {
                            value: /^[0-9]{11}$/i,
                            message: 'El campo es requerido'
                        }
                    })} />
                    {
                        errors.phone && <span className="text-danger">{errors.phone.message}</span>
                    }
                    <label htmlFor="mail" className="mt-3 fs-3">Mail:</label>
                    <input className="w-75 text-center rounded-pill border-1" type="mail" placeholder="Ejemplo@hotmail.com" {...register('mail', {
                        required: {
                            value: true,
                            message: 'Ingrese un correo válido'
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'El formato no es correcto'
                        }
                    })} />
                    {
                        errors.mail && <span className="text-danger">{errors.mail.message}</span>
                    }

                    <div className="container mt-2 mb-2 border rounded-pill d-flex align-items-center justify-content-center">
                        <box-icon type='solid' name='badge-dollar'></box-icon>
                        <h4 className="text-center text-primary mt-4 mb-4 p-2">El total a pagar es de: $ {total} ARS - {itemsCarrito()} productos</h4>
                    </div>

                    <div className="d-flex justify-content-around w-100">
                        <input className="fw-bold mt-3 btn btn-danger" type="reset" />
                        <button className="fw-bold mt-3 btn btn-success" type="submit">Comprar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
