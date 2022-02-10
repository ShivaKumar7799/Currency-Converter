function currencyExchange(){
        var presentCurrency = document.getElementById("presentCurrency").value;
        var convertor = document.getElementById("convertor").value;
        if(convertor == "US-dollar"){
                var usDollar = 75.28;
                var result = (presentCurrency/usDollar);
                document.getElementById("result").value = result;
        }
        if(convertor == "Euro"){
                var Euro = 86.01;
                var result = (presentCurrency/Euro);
                document.getElementById("result").value = result;
        }
        if(convertor == "Aus-dollar"){
                var Ausdollar = 54.11;
                var result = (presentCurrency/Ausdollarr);
                document.getElementById("result").value = result;
        }
        if(convertor == "Japan-Yen"){
                var japanYen = 0.65;
                var result = (presentCurrency/japanYen);
                document.getElementById("result").value = result;
        }
        if(convertor == "Canada-dollar"){
                var canadaDollar = 59.35;
                var result = (presentCurrency/canadaDollar);
                document.getElementById("result").value = result;
        }
}