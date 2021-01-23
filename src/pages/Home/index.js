import React from "react"
import {} from "wouter"
import banner from "../../assets/banner-principal.jpg";
import bannerSecundary from "../../assets/banner-principal-mobile.jpg";
import bannerDeport from "../../assets/banner-deportivo.jpg";
import bannerInfant from "../../assets/banner-moda-infantil.jpg";
import mesa1 from "../../assets/imagenes_Mesa de trabajo 1.jpg";
import mesa2 from "../../assets/imagenes_Mesa de trabajo 1 copia 3.jpg";
import mesa3 from "../../assets/imagenes_Mesa de trabajo 1 copia.jpg";
import mesa4 from "../../assets/imagenes_Mesa de trabajo 1 copia 2.jpg";
import { ReactComponent as FaceBook } from "../../assets/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icon-youtube.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css"
export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
    return (
      <>
        <div className="grid">
          <div className="banner">
            <img className="img" src={banner} alt={banner} />
          </div>
          <div className="banner-mobile">
            <img className="img" src={bannerSecundary} alt={bannerSecundary} />
          </div>
          <div className="banner-secundary">
            <img className="img" src={bannerDeport} alt={bannerDeport} />
          </div>
          <div className="banner-secundary">
            <img className="img" src={bannerInfant} alt={bannerInfant} />
          </div>
          <div className="productosPop">
            <h2 className="App-title">PRODUCTOS MÁS BUSCADOS</h2>

            <Carousel responsive={responsive}>
              <div className="card">
                <img src={mesa4} alt={mesa4} />
                <br />
                <small>Blusa color sólido manga corta</small> <br />
                200.452
              </div>
              <div className="card">
                <img src={mesa1} alt={mesa1} />
                <br />
                <span>
                  <small>Blusa color sólido manga corta</small> <br />
                  200.452
                </span>
              </div>
              <div className="card">
                <img src={mesa2} alt={mesa2} />
                <br />
                <small>Blusa color sólido manga corta</small> <br />
                200.452
              </div>
              <div className="card">
                <img src={mesa3} alt={mesa3} />
                <br />
                <small>Blusa color sólido manga corta</small> <br />
                200.452
              </div>
              <div className="card">
                <img src={mesa4} alt={mesa4} />
                <br />
                <small>Blusa color sólido manga corta</small> <br />
                200.452
              </div>
              <div className="card">
                <img src={mesa2} alt={mesa2} />
                <br />
                <small>Blusa color sólido manga corta</small> <br />
                200.452
              </div>
            </Carousel>
          </div>

          <footer>
            <div className="footer-item">
              <strong>POLÍTICAS</strong>
              <br />
              <small>Politícas de privacidad</small>
              <br />
              <small>Politícas de cambio</small>
              <br />
              <small>Politícas de envío</small>
              <br />
              <small>Terminos y condiciones</small>
              <br />
              <small>Responsabilidad social</small>
            </div>
            <div className="footer-item">
              <strong>ACERCA DE SPEEDO</strong>
              <br />
              <small>Encuentra tu tienda</small>
              <br />
              <small>Contáctanos</small>
              <br />
              <small>Trabaja con nosotros</small>
            </div>
            <div className="footer-item">
              <strong>SIGUENOS EN:</strong>
              <br />
              <div className="car-ontainer">
                <FaceBook className="redes" />
                <Twitter className="redes" />
                <Instagram className="redes" />
                <Youtube className="redes" />
              </div>
            </div>
          </footer>
        </div>
      </>
    );
}