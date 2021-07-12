class CurrencyService {

/// Transformer
    getCurrencies() {
        const config = ["EUR", "USD", "RON", "RUB"]

        let data = new Date()
        let formatDate = data.getDate() + '.' +'0'+ (data.getMonth() +1) + '.' + data.getFullYear()
        let currencies = []

        let xhr = new XMLHttpRequest()
        //HW1: data de substituit Date class
        xhr.open('GET', `https://www.bnm.md/ro/official_exchange_rates?get_xml=1&date=${formatDate}`)

        xhr.onload = () => {
        
            console.log(xhr.responseText)
            let xmlParser = new DOMParser()
            let xml = xmlParser.parseFromString(xhr.responseText, "text/xml")
            //console.log(xml)

            let valuteElements = xml.getElementsByTagName("Valute")
           
           for(let i = 0; i < valuteElements.length; i++){
              let code = valuteElements[i].children[1].firstChild.textContent 
            if(config.includes(code)) {
               let nominal = valuteElements[i].children[2].firstChild.textContent
               let rate = valuteElements[i].children[4].firstChild.textContent

               currencies.push( new  Currency(code,parseFloat(nominal),parseFloat(rate) ))
               }
            }
           //console.log(currencies)
           window.currencySwitcher = new CurrencySwitcher(currencies) 
           window.currencySwitcher.render("rootCurrSwitch")
        }

        xhr.send()

        return currencies
    }
}