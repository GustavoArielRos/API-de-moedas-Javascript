
document.getElementById("dolar").onclick = moeda_dolar;
document.getElementById("euro").onclick = moeda_euro;
document.getElementById("bitcoin").onclick = moeda_bit;






function moeda_dolar(){
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta=>{
    
    return resposta.json();   
    }).then(corpo=>{
        document.getElementById("alta").innerHTML = corpo.USDBRL.high;
        document.getElementById("baixa").innerHTML = corpo.USDBRL.low;
        document.getElementById("compra").innerHTML = corpo.USDBRL.bid;
        document.getElementById("venda").innerHTML = corpo.USDBRL.ask;
    })
}

function moeda_euro(){
    fetch(`https://economia.awesomeapi.com.br/last/EUR-BRL`).then(resposta=>{
    return resposta.json();   
    }).then(corpo=>{
        document.getElementById("alta").innerHTML = corpo.EURBRL.high;
        document.getElementById("baixa").innerHTML = corpo.EURBRL.low;
        document.getElementById("compra").innerHTML = corpo.EURBRL.bid;
        document.getElementById("venda").innerHTML = corpo.EURBRL.ask;
    })
}

function moeda_bit(){
    fetch(`https://economia.awesomeapi.com.br/last/BTC-BRL`).then(resposta=>{
    return resposta.json();   
    }).then(corpo=>{
        document.getElementById("alta").innerHTML = corpo.BTCBRL.high;
        document.getElementById("baixa").innerHTML = corpo.BTCBRL.low;
        document.getElementById("compra").innerHTML = corpo.BTCBRL.bid;
        document.getElementById("venda").innerHTML = corpo.BTCBRL.ask;
    })
}