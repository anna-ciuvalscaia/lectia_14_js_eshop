// Cart component module
class CurrencySwitcher {
    constructor(currencies) {
        this.currencies = currencies
        this.selected  = this.currencies[0]
    }

    render(rootID) {
        let root = document.getElementById(rootID)
        root.innerHTML = ``
        
        let countLabel = this.selected?.code ?? "loading ..."
        console.log(this.selected?.code)
        let dropList = ``
        for(let i=0; i<this.currencies.length; i++){
          dropList += `<li><a onclick="window.currencySwitcher.change(event)" class="dropdown-item" href="#">${this.currencies[i].code}</a></li>`
        }
       
        let html = `
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            ${countLabel}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            ${dropList}
          </ul>
        </li>
      </ul>
        `
        root.innerHTML = html
    }

   change(e) {
     //console.log(e.target.innerText)
     
     for(let i=0; i<this.currencies.length; i++){
       if(this.currencies[i].code == e.target.innerText){
         this.selected = this.currencies[i]
         break
       }
     }
     this.render("rootCurrSwitch")
   }
    
}