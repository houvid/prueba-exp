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
      items: 1,
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
                <img src={mesa1} alt={mesa1} />
                <br />
                <small>precio</small> precio
              </div>
              <div className="card">
                <img src={mesa2} alt={mesa2} />
                <br />
                <small>precio</small> precio
              </div>
              <div className="card">
                <img src={mesa3} alt={mesa3} />
                <br />
                <small>precio</small> precio
              </div>
              <div className="card">
                <img src={mesa4} alt={mesa4} />
                <br />
                <small>precio</small> precio
              </div>
            </Carousel>
          </div>

          <footer>
            <div className="footer-item">aaaaaaa</div>
            <div className="footer-item">aaaaaaa</div>
            <div className="footer-item">aaaaaaa</div>
          </footer>
        </div>
      </>
    );
}