// product module
class Product {
    constructor(id, name, image, price){
        this.id = id
        this.name = name
        this.image = image
        this.price = price
    }

    render() {
        //hw2: fix price render
        let html = `
        <div class="card col-xl-3 col-md-6 col-sm-12 m-4" style="max-width: 25rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body m-auto">
    <h5 class="card-title text-center">${this.name}</h5>
    <p class="card-text text-center">${this.price.amount} ${this.price.currency}</p>
    <a href="#" data-product-id="${this.id}" class="btn btn-primary btn-add-to-cart">Add to cart</a>
  </div>
</div>
        `

        return html
    }
}