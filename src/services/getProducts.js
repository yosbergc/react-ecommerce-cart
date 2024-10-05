const LINK_TO_GET_PRODUCTS = 'https://dummyjson.com/products'
export default function getProducts() {
    return fetch(LINK_TO_GET_PRODUCTS)
          .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un error en la respuesta')
            }
            return response.json()
          })
          .then(data => {
            return data.products;
          })
          .catch(error => {
            return error;
          })
}