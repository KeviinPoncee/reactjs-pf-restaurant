![Je Co](https://user-images.githubusercontent.com/83381101/141214316-46383b24-673b-453e-9285-522de0787d88.jpg)

# RESTORANT Je&Co.
## Proyecto e-commerce de un restorant o tienda de comidas

## Contenido
- Este proyecto (EN DESARROLLO) tiene una única rama, main.

## Objetivos

> El objetivo del proyecto es crear una Tienda  E-commerce  (un sistema de venta de productos
>y gestiona los pagos a través de medios electrónicos.), en una single-page application (SPA), o
>aplicación de página única e-commerce, donde se pueda navegar sobre los distintos productos
>en ventas y también sobre sus categorías, luego agregarlos al carrito, modificar los elementos
>del carrito, para luego finalizar la compra de los elementos cargados al mismo.

Etapa actual - EN DESARROLLO

## Tenología

Este proyecto se está desarrolando en React-Js:

- [React-Js](https://create-react-app.dev/) - La App fue creada con Create React App

## Instalación

Resto Je&Co requiere [React-Js](https://create-react-app.dev/) para ejecutarse.

Para clonar este repositorio debe seguir las siguientes instrucciones:

1 - Abre el Visual Studio Code

2 - Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.

3 - Escribe `git clone` y luego pega la siguiente URL 
`https://github.com/KeviinPoncee/pf-resto-reactJs.git`

4 - Presiona `Enter` para crear tu clon local.

Por mayor información: `https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository`

## Complementos

Una vez clonado el repositorio, para que el proyecto se ejecute correctamente, se deben instalar las siguientes librerias:

`• react-router-dom`  : Es una librería que nos permite el enrutamiento y navegabilidad entre los diferentes componentes de nuestra SPA. Para instalarlo se debe ejecutar en la terminal lo siguiente:

```sh
npm install react-router-dom
```

`•	boxicons `  : Boxicons es una colección gratuita de iconos de código abierto cuidadosamente elaborados. Cada icono está diseñado en una cuadrícula de 24 píxeles con las pautas de material.
```sh
npm install boxicons
```

`•	SweetAlert2 `  : SweetAlert es un plugin de jQuery y con el cual podremos dar un aspecto profesional a los mensajes que lancemos a los usuarios acorde a las tendencias actuales. Además, tenemos la posibilidad de configurar el plugin de muchas formas diferentes.

```sh
npm install sweetalert2
```

`•	react-hook-form `  : Esta nos permite hacer formularios no-controlados, manteniendo el estándar HTML, reduciendo el número de re-renders y generando una mejor experiencia de usuario.

```sh
npm install react-hook-form
```

## Ejecución

Para ejecutar este proyecto simplemente escriba y ejecute en su consola de Visual Studio Code:

```sh
npm start
```
>Esto hará que la aplicación se ejecute en modo de desarrollo.
>Abra http: // localhost: 3000 para verlo en el navegador.
>La página se recargará si realiza modificaciones. También verá errores en la consola.

## Estado del Proyecto

Actualmente cuenta con los siguientes Componentes: 
- `NavBar` : barra de navegación de la SPA.
- `HomeContainer` : componente de bienvenida.
- `ItemListContainer` : En donde mostramos el catálogo, en conjunción con los compomentes `ItemList` e `Item`.
- `ItemDetailContainer` : Para mostrar la información del item seleccionado `ItemDetail`, en  dónde ingresaremos la cantidad y nos permite la opción de agregar al carrito.
- `CardWidget` : componente para mostrar en la barra de navación la cantidad de productos seleccionados (en desarrollo).
- `getFecth` : componente que nos devuelve un arreglo de objetos, que contiene el catálogo de productos.

- [Linkedin](https://www.linkedin.com/in/keviin-poncee/)