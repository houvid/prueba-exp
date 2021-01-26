

export default function getProducts({ keyword = 'moto'}={}) {
    const apiURL = `https://api.mercadolibre.com/sites/MCO/search?q=${keyword}`
     return fetch(apiURL)
    .then(res => res.json())
    .then(response=> {
      const {results = []} = response
      if (Array.isArray(results)) {
          const products = results.map(product => {
              const { title, price, id, permalink } = product;
              const {thumbnail} = product
              const { state_name } = product.address;
            return {
              title,
              price,
              thumbnail,
              id,
              permalink,
              state_name
            };
          }
          )
          return products
      }
    })

}


function getImg(id) {
  fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((item) => {
      const { pictures = [] } = item;
      if (Array.isArray(pictures)) {
        const imagenes = pictures.map((imagen) => {
          const { url } = imagen;
          return url
        })
        return imagenes[0]
      }
    });
  }