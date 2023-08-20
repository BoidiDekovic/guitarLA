import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return [
      {title: 'GuitarrLA - Sobre Nosotros' },
      {description: "Venta de guitarras, blog de musica"}
    ]
  
}

export function links() {
  return [
      {
        rel:'stylesheet',
        href: styles
      },
      {
        rel:'preload',
        href: imagen,
        as: 'image'
      }
  ]
}

function Nosotros() {
  return (
      <main className="contenedor nosotros">
          <h2 className="heading">Nosotros</h2>

          <div className="contenido">
              <img src={imagen} alt="imagen sobre nosotros"/>
          </div>

          <div>
            <p>Sitio dedicado exclusivamente a la Guitarra, el instrumento con más amantes y cultores en la historia de la humanidad.
              Presente en todo el mundo,en todos los géneros musicales, en todos los estratos sociales y en todas las culturas.</p>
            <p>En nuestra página de guitarras, nos apasiona el arte de crear y tocar música.
              Nuestro objetivo es ofrecerte las mejores guitarras para que puedas expresarte y cautivar a tu audiencia con cada nota.
              Ya seas un principiante entusiasta o un músico experimentado, encontrarás en nuestro catálogo una amplia variedad de guitarras de alta calidad y marcas reconocidas.
              Nuestro equipo de expertos está aquí para asesorarte y ayudarte a encontrar la guitarra perfecta que se ajuste a tu estilo y preferencias.
              Descubre el poder de las seis cuerdas con nosotros y déjate llevar por el increíble mundo de la música. ¡Únete a nuestra comunidad de amantes de la guitarra y desata tu pasión!</p>  
          </div>      

      </main>

  )
}

export default Nosotros
