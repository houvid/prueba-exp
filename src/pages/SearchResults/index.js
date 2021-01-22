import React from "react"
import ListOfProduct from '../../components/ListOfProduct/'

export default function SearchResults({params}) {


    return (
      <>
        <div>
          <h2> Búsqueda</h2>
        </div>
        {<ListOfProduct product={params} />}
      </>
    );
}