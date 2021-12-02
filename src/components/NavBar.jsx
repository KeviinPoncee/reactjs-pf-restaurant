import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../services/getFirestore'
import { CartWidget } from './CartWidget'

const SearchForm = () => {

    const [data, setData] = useState('')
    const [productoSearch, setProductoSearch] = useState([])
    const [productos, setProductos] = useState([])
    const [condition, setCondition] = useState(true)

    const handleInputChange = evt => {
        // console.log(evt.target.value);
        setData(evt.target.value.toLowerCase())
    }

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('productos').get()
        dbQuery
            .then(res => {
                setProductos(res.docs.map(prod => ({ id:prod.id, ...prod.data() })))
            })
            .catch(err => console.log(err))
    }, [condition])

    const sendSearch = evt => {
        evt.preventDefault()
        // console.log(productos.find(prod => data.includes(prod.title)));
        if (productos.find(prod => data.includes(prod.title))) {
            setProductoSearch(productos.find(prod => data.includes(prod.title)))
            setCondition(false)
        } else (
            setCondition(true)
        )
    }

    const cancel = () => {
        setCondition(true)
    }
    // console.log(productoSearch);


    return (
        <>
            <form className="d-flex m-3 align-items-center" onSubmit={sendSearch}>
                <div className='me-2'>
                    <box-icon name='search-alt'></box-icon>
                </div>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Buscar aquí... -- Ej: hamburguesa - crepes - pizza"
                    aria-label="Search"
                    name='data'
                    onChange={handleInputChange}
                />
                <button className="btn btn-outline-dark fw-bold">Buscar</button>
            </form>
            {
                condition ?
                    <></>
                    :
                    <div className="container">
                        <div class="card mb-3" id={productoSearch.idNumber}>
                            <button onClick={cancel} className="btn btn-outline-danger position-absolute top-0 end-0 d-flex justify-content-center">
                                <box-icon className="w-75" name='exit'></box-icon>
                            </button>
                            <div class="row g-0 d-flex align-items-center">
                                <div class="col-md-3">
                                    <img src={productoSearch.image} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{productoSearch.title}</h5>
                                        <p class="card-text">{productoSearch.descripcion}</p>
                                        <Link to={`/detalle/${productoSearch.id}`} className="btn btn-primary p-1" onClick={cancel}>Detalles</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-body rounded">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand d-flex align-items-center">
                        <box-icon name='dish' type='solid' ></box-icon>Je&Co
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fw-bold text-center">
                            <li className="nav-item">
                                <Link className="nav-link" to='/reactjs-pf-restaurant'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/productos'>Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/categoria/menu'>Menú</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/categoria/dishes'>Platos</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <SearchForm />
        </>
    )
}
