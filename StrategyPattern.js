//Strategy pattern - This is used to encapsulate related functions(strategies) into one.
//It is useful to easily swap strategies easily.

// This program allows us to calculate different shipping cost of different companies like
//FEDex,USPS,UPS etc.

function Fedex(){
    this.calculate = package => {
       return 2.5
    }
}

function USPS(){
    this.calculate = package => {
       return 1.56
    }
}

function UPS(){
    this.calculate = package => {
       return 4.5
    }
}

const fedex = new Fedex()
const usps = new USPS()
const ups = new UPS()

//Strategy Pattern

function Shipping(){
    this.company = "";
    this.setStrategy = function(company){
        this.company = company;
    }
    this.calculate = function(package){
       return this.company.calculate(package)
    }
}

const package = {from: "Alabama", to: "NY", weight: 1.56}

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log(shipping.calculate(package)) //2.5

shipping.setStrategy(usps)
console.log(shipping.calculate(package)) //1.56

shipping.setStrategy(ups)
console.log(shipping.calculate(package)) //4.5
