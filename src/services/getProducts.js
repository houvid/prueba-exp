

export default function getProducts({ keyword = 'moto'}={}) {
    
    const apiURL = `https://api.mercadolibre.com/sites/MCO/search?q=${keyword}`

     return fetch(apiURL)
     
    .then(res => res.json())
    .then(response=> {
      const {results = []} = response
      if (Array.isArray(results)) {
          const products = results.map(product => {
              const {title,price,id} = product
              const {thumbnail} = product
            return {title,price,thumbnail,id}
          }
            )
          return products
      }
    })

}