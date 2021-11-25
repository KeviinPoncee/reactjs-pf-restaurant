import React from 'react'

export const Item = ({img, nombre, descripcion, precio, id}) => {
    return (
        <>
            <img src={img} className="img-items card-img-top d-flex justify-content-center" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title fw-bold">{nombre}</h5>
                <p className="description-card card-text fw-normal">{descripcion}</p>
                <h5 className="price fw-bold mt-2">Precio: $ {precio}</h5>
            </div>
        </>
    )
}
