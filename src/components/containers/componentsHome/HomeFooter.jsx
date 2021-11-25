import React from 'react'
import { Link } from 'react-router-dom'

export const HomeFooter = () => {
    return (
        <div className='bg-secondary p-2 text-dark bg-opacity-50 mt-4'>
            <div className='container d-flex justify-content-around'>
                <div>
                    <h4 className="text-center fw-bold text-primary">Enlaces rapidos</h4>
                    <div className='container d-flex flex-column'>
                        <Link className='btn' to='/'>Home</Link>
                        <Link className='btn' to='/categoria/menu'>Menú</Link>
                        <Link className='btn' to='/categoria/dishes'>Platos</Link>
                        <Link className='btn' to='/cart'>Carrito</Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-center fw-bold text-primary">Contacto</h4>
                    <div className='container'>
                        <p>+54 9 11-2222-3333</p>
                        <p>Jeyco@hotmail.com</p>
                        <p>Jeyco-resto@hotmail.com</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-center fw-bold text-primary">Siguenos</h4>
                    <div className='container d-flex flex-column'>
                        <Link className='btn' to='/'>Instagram</Link>
                        <Link className='btn' to='/'>Facebook</Link>
                        <Link className='btn' to='/'>Twitter</Link>
                        <Link className='btn' to='/'>Linkedin</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
