import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirestore';
import { ItemDetail } from '../ItemDetail';

export const ItemDetailContainer = () => {
    const [productoDetail, setProductoDetail] = useState([])
    const { idProducto } = useParams()
    // agregar Loading
    const [detailLoading, setDetailLoading] = useState(true)

    useEffect(() => {
        /* FIREBASE */
        const dbConection = getFirestore()
        
        /* const dbQuery = dbConection.collection('items').doc('idProducto').get() */
        const dbQuery = dbConection.collection('productos').doc(idProducto).get()
        dbQuery
        .then(res => {
            setProductoDetail({ id: res.id, ...res.data() })
        })
        .catch(err => console.log(err))
        .finally(()=>{
            setTimeout(()=> {
                setDetailLoading(false)
            },2500)
        })
    }, [idProducto])

    // console.log(productoDetail);

    return (
        <div className="container mt-5 pt-5">
            <div className="mt-5">
                <h2 className="text-center fw-bold">~ Detalle de item ~</h2>
                {
                    detailLoading ?
                        <div className="text-center">
                            <img src="https://github.com/KeviinPoncee/reactjs-pf-restaurant/blob/gh-pages/assets/images/loader.gif?raw=true" alt="" />
                        </div>
                        :
                        <ItemDetail img={productoDetail.image} nombre={productoDetail.title} descripcion={productoDetail.descripcion} precio={productoDetail.precio} id={productoDetail.idNumber} />
                }
            </div>
        </div>
    )
}
