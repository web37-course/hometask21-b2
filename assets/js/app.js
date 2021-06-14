
let bitcoinPrice = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8];

let bestBuy = 0;

let bestSell = 0;

let buyDay = 0;

let sellDay = buyDay + 1;

maxIncome = bestSell - bestBuy;

for(let i = 0; i < bitcoinPrice.length - 1; i++){
    for(let j = i + 1; j < bitcoinPrice.length; j++){
        if(bitcoinPrice[j] - bitcoinPrice[i] > maxIncome){
            buyDay = i + 1;
            sellDay = j + 1;
            bestBuy = bitcoinPrice[i];
            bestSell = bitcoinPrice[j];
            maxIncome = bestSell - bestBuy;
        }
    }
}


console.log(`Максимальная прибыль составит ${maxIncome} при покупке ${buyDay} числа по курсу ${bestBuy} и продаже ${sellDay} числа по курсу ${bestSell}`);