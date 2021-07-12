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
  <img src="${this.image}" class="card-img-top" alt="..." style="width: 300px; height: 350px">
  <div class="card-body m-auto text-center">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">${this.price.amount} ${this.price.currency}</p>
    <a href="#" data-product-id="${this.id}" class="btn btn-primary btn-add-to-cart">Add to cart</a>
  </div>
</div>
        `

        return html
    }
}