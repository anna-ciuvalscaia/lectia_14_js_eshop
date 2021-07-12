class TestDataService {

/// Transformer
    getTestProducts(count=10) {

        let products = []

        let xhr = new XMLHttpRequest()

        xhr.open('GET', 'https://fakestoreapi.com/products')

        xhr.onload = () => {
         let data = JSON.parse(xhr.responseText) 
         
         for (let i=0; i<data.length; i++) {
             
           let product = new Product(
               data[i].id, 
               data[i].title, 
               data[i].image, {
            amount: data[i].price,
            currency: "MDL"
        })
           products.push(product)
         }
         //!!!! Nu pot Face return la un eveniment !!!!
         renderCatalog("root-catalog")
         //console.log(products)
        }

        xhr.send()

        return products
    }
}