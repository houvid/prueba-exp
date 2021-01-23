import React from "react"
import ListOfProduct from '../../components/ListOfProduct/'
import "./styles.css";
export default function SearchResults({params}) {


    return (
      <>
        <div className="Text-Prin">
          <h2> Búsqueda</h2> 
        </div>
        <div className="container-List">
        {<ListOfProduct product={params} />}
        </div>
      </>
    );
}