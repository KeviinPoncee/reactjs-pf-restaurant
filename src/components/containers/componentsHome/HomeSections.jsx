import React from 'react'
import { Link } from 'react-router-dom'

export const Carousel = () => {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img src="../assets/images/home-img-1.png" class="d-block" alt="..." id='img-home' />
                    <div class="carousel-caption d-block bg-light p-2 text-dark bg-opacity-75">
                        <h2 className="fw-bold fs-1 text-success">Plato Especial</h2>
                        <p className='fw-bold fs-3'>Fideos Picantes</p>
                        <Link className='btn btn-primary text-capitalize' to='/productos'>¡ ordenar ahora !</Link>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="../assets/images/home-img-2.png" class="d-block" alt="..." id='img-home' />
                    <div class="carousel-caption d-block bg-light p-2 text-dark bg-opacity-75">
                        <h2 className="fw-bold fs-1 text-success">Plato Especial</h2>
                        <p className='fw-bold fs-3'>Pollo Frito</p>
                        <Link className='btn btn-primary text-capitalize' to='/productos'>¡ ordenar ahora !</Link>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="../assets/images/home-img-3.png" class="d-block" alt="..." id='img-home' />
                    <div class="carousel-caption d-block bg-light p-2 text-dark bg-opacity-75">
                        <h2 className="fw-bold fs-1 text-success">Plato Especial</h2>
                        <p className='fw-bold fs-3'>Pizza Caliente</p>
                        <Link className='btn btn-primary text-capitalize' to='/productos'>¡ ordenar ahora !</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AboutUs = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-success text-center fw-bold'>Sobre Nostros</h2>
            <h3 className='text-center fw-bold'>¿Por qué elegirnos?</h3>
            <div className="aboutUs-content">
                <div className='aboutUs-Img'>
                    <img src="../assets/images/about-img.png" alt="" />
                </div>
                <div className='aboutUs-Text'>
                    <h2>La mejor comida del país</h2>
                    <p>Disfruta de un mundo de color, gastronomía y cultura. Nos apasiona este mundo de delicias gastronómicas, así como de los talentosos chefs y camareros que están detrás del mostrador (y sabemos que tú pones todo tu corazón y alma en cada plato y postre que sirves).
                    <br />
                    Je&Co es la plataforma digital para que los comensales descubran y exploren todo lo que los restaurantes tienen a su alrededor. Para todos los gustos, siempre hay un restaurante Je&Co esperando y listo para servirte.</p>
                    <div className='aboutUs-services'>
                        <p className='btn btn-secondary d-flex align-items-center'> <box-icon className='' name='timer' type='solid' animation='burst' ></box-icon> - Entrega Gratis</p>
                        <p className='btn btn-secondary d-flex align-items-center'> <box-icon name='shopify' type='logo' animation='burst' ></box-icon> - Pagos Fáciles</p>
                        <p className='btn btn-secondary d-flex align-items-center'> <box-icon name='support' animation='burst' ></box-icon> - Servicios 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const HomeSections = () => {
    return (
        <div>
            <Carousel />
            <AboutUs />
        </div>
    )
}
