import React from 'react'
import './styles.css'
export default function Product({ title, thumbnail, price, id, permalink, state_name }) {
  return (
    <div className="card">
      <a
        href={permalink}
        target="_blank"
        rel=" noreferrer"
        className="products"
      >
        <img src={thumbnail} alt={id} title={title} />
        <br />
        <span className="text-product">
          <strong>Precio: </strong>
          {price}
          <br />
          <strong>Lugar: </strong>
          <br /> {state_name}
        </span>
        <br />
      </a>

      <a
        href={`https://tucarro.santanderconsumer.co/landing/?idvehiculo=${id}`}
        rel="noreferrer"
        target="_blank"
        title="Simular crédito"
      >
        <button className="button button3">Credito</button>
      </a>
      <a href={permalink} rel="noreferrer" target="_blank" title="Ir a página">
        <button className="button button4">Comprar</button>
      </a>
    </div>
  );
}