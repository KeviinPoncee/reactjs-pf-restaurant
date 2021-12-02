import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../services/getFirestore'
import { ItemList } from '../ItemList'

export const ItemListContainer = () => {

    const [product, setProduct] = useState([])
    const [productLoading, setProductLoading] = useState(true)

    // /categoria/idcategoria (menu o dishes)
    const {idCategoria} = useParams()

    useEffect(() => {
        /* FIREBASE */
        const dbConection = getFirestore()
        /*
        where traigo los items con precio mayor a 900
        // const dbQuery = dbConection.collection('items').where('price','>',900).get()

        .where traigo los items con categoria menu
        // const dbQuery = dbConection.collection('items').where('categorias','===',menu).get()
        
        .limit limita los productos mostrados
        // const dbQuery = dbConection.collection('items').limit(1).get()
        */
        // undefine = false
        if (idCategoria) {
            const dbQuery = dbConection.collection('productos').where('categoria','==',idCategoria).get()
            dbQuery
            .then(res => {
                setProduct( res.docs.map( prod => ({ id: prod.id, ...prod.data() }) ) )
            })
            .catch(err => console.log(err))
            .finally(()=>{
                setTimeout(()=>{
                    setProductLoading(false)
                })
            })
        } else {
            const dbQuery = dbConection.collection('productos').get()
            dbQuery
            .then(res => {
                setProduct( res.docs.map( prod => ({ id: prod.id, ...prod.data() }) ) )
            })
            .catch(err => console.log(err))
            .finally(()=>{
                setTimeout(()=>{
                    setProductLoading(false)
                })
            })
        }
    }, [idCategoria])
    
    // setTimeout(()=> {
    //     setProductLoading(false)
    // },2500)

    return (
        <div className="mt-5 pt-5">
            <div className="fw-bold d-flex flex-column align-items-center mt-5">
                <h1 className="fw-bold">~ Productos ~</h1>
                {
                    productLoading ?
                        <img src="https://github.com/KeviinPoncee/reactjs-pf-restaurant/blob/gh-pages/assets/images/loader.gif?raw=true" alt="" />
                    :
                        <ItemList productos={product}/>
                }
            </div>
        </div>
    )
}
