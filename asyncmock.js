const productosPrincipales = [
    {id: "1", nombre: "cafetera", precio: 80000, img: "/cafetera.png", categoria: "hogar", stock: 5, detalle: "Máquina automática diseñada para extraer el máximo aroma y sabor de tus granos de café favoritos. Ideal para disfrutar de una taza perfecta y caliente en cualquier momento de la mañana."},
{id: "2", nombre: "pava", precio: 60000, img: "/pava.png", categoria: "hogar", stock: 5, detalle: "Calienta agua con rapidez y precisión gracias a su selector de temperatura y corte automático. Es el complemento indispensable para preparar infusiones o acelerar tus preparaciones en la cocina."},
{id: "3", nombre: "taladro", precio: 85000, img: "/taladro.jpg", categoria: "herramientas", stock: 5, detalle: "Herramienta potente y versátil con velocidad ajustable, perfecta para perforar diversas superficies con precisión. Su diseño ergonómico facilita tanto reparaciones domésticas como trabajos de construcción profesional."},
{id: "4", nombre: "amoladora", precio: 90000, img: "/amoladora.png", categoria: "herramientas", stock: 5, detalle: "Equipo de alto rendimiento diseñado para realizar cortes limpios y desbastes efectivos en metal o piedra. Cuenta con sistemas de seguridad avanzados para garantizar un manejo firme y protegido."},
{id: "5", nombre: "tablet", precio: 250000, img: "/tablet.png", categoria: "entretenimiento", stock: 5, detalle: "Dispositivo portátil con pantalla táctil de alta resolución, ideal para el consumo de medios y tareas creativas. Combina la ligereza de un móvil con la potencia necesaria para trabajar o estudiar desde cualquier lugar."},
{id: "6", nombre: "play station", precio: 900000, img: "/playStation.png", categoria: "entretenimiento", stock: 5, detalle: "Consola de última generación que ofrece gráficos realistas en 4K y tiempos de carga ultrarrápidos. Vive una experiencia inmersiva única gracias a su mando con retroalimentación háptica y audio 3D."},
{id: "7", nombre: "equipo de audio", precio: 120000, img: "/equipoDeAudio.png", categoria: "tecnologia", stock: 5, detalle: "Sistema de sonido de alta fidelidad con bajos potentes y agudos cristalinos para llenar cualquier habitación. Incluye conectividad inalámbrica para reproducir tus listas favoritas con la mejor calidad acústica."},
{id: "8", nombre: "computadora", precio: 550000, img: "/computadora.png", categoria: "tecnologia", stock: 5, detalle: "Computadora personal de alto rendimiento con teclado integrado y gran capacidad de almacenamiento. Perfecta para multitarea, diseño gráfico o gestión de documentos con total autonomía de batería."},
]

export const obtenerProductos = () => {
    return new Promise (resolve=> {
        setTimeout(()=>{
        resolve(productosPrincipales)}, 1500)
    })
}

export const obtenerProductosSolo = (id) => {
    return new Promise (resolve=> {
        setTimeout(()=>{
            const producto = productosPrincipales.find(item=>item.id===id)
        resolve(producto)}, 100)
    })
}

export const obtenerProductosCategoria = (cat) => {
    return new Promise (resolve=> {
        setTimeout(()=>{
             const prodCategoria = productosPrincipales.filter(item=>item.categoria===cat)
        resolve(prodCategoria)}, 100)
    })
}