//Proxy Pattern: Allows one to use one object(proxy) as a placeholder for another object.
//Proxy can control access to that object. So instead of using the object directly we can make use of proxy to use that object.
//Proxies can be used to add extra functionality like cache.

//This program is to demo a cryptocurreny program that displays values of various cryptocurrency. In order to get
//these values we make external API calls and with use of proxy we can limit the no. of API calls be using a cache.

function CryptocurrencyAPI(){
    this.getValue = function(coin){
        console.log("Calling External API")
        switch(coin){
            case "Bitcoin":
                return "$8,500"
            case "Litecoin":
                return "$500"
            case "Ethereum":
                return "$150"
        }
    }
}

const api = new CryptocurrencyAPI()

console.log(api.getValue("Bitcoin"))
//Calling External API
//$8,500

console.log(api.getValue("Litecoin"))
//Calling External API
//$500

console.log(api.getValue("Ethereum"))
//Calling External API
//$150

console.log(api.getValue("Bitcoin"))
//Calling External API
//$8,500

//Proxy
function CryptocurrenyProxy(){
    this.api = new CryptocurrencyAPI();
    this.cache = {};
    this.getValue = function(coin){
        if(!cache[coin]){
            cache[coin] = this.api.getValue(coin);
        }
        return cache[coin]
    }
}

const proxy1 = new CryptocurrenyProxy()

console.log(proxy1.getValue("Bitcoin"))
//Calling External API
//$8,500

console.log(proxy1.getValue("Litecoin"))
//Calling External API
//$500

console.log(proxy1.getValue("Ethereum"))
//Calling External API
//$150

console.log(proxy1.getValue("Bitcoin"))
//$8,500 - Fetches from proxy cache