// main script

// initialization of service
const tds = new TestDataService()
const cs = new CurrencyService()


let catalog = tds.getTestProducts()
let currencies = cs.getCurrencies()
let currencySwitcher = null
//currencySwitcher.render("rootCurrSwitch")
//console.log("catalog>>", catalog)

let cart = new Cart(100)
cart.render("rootCart")


renderCatalog("root-catalog")