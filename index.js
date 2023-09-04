// conver string to number 
function converToNumber(idName) {
    let isString = document.getElementById(idName).innerText;
    isString = parseFloat(isString);
    return isString;
}
// set new total price 
function setNewPrice(idName, newValue) {
    let oldPrice = document.getElementById(idName);
    oldPrice.innerText = newValue;
}
//  this function for discount 
function applyDiscount() {
    let  discountCuppon = document.getElementById('discount-input').value;
    let totalMony = converToNumber('total-price');
    if (discountCuppon === 'SELL200') {
        let divide = (totalMony / 100)* 20;
        divide = divide.toFixed(2);
        setNewPrice('discount', divide)
        let newTotalPay = totalMony -  divide;
        newTotalPay = newTotalPay.toFixed(2);
        setNewPrice('total-pay', newTotalPay)
    }
}
// this function for add to chart and count price 
function productPrice(idName, productName){
    // product price 
    let priceString = document.getElementById(idName).innerText;
    priceString = parseFloat(priceString);
    // product name 
    let productNameString = document.getElementById(productName).innerText;
    // add product name in chart 
    let addProductChart = document.getElementById('productCart');
    let createProductChartItems = document.createElement('li');
    createProductChartItems.innerText = productNameString;
    // add 
    addProductChart.appendChild(createProductChartItems);
    // get total price 
    let getTotalPrice = converToNumber('total-price');
    // new total price 
    let newPrice = priceString + getTotalPrice;
    setNewPrice('total-price', newPrice)
    // total pay 
    setNewPrice('total-pay', newPrice);
    // this condision for remov attribute in discount button when total price 200+
    if (newPrice >= 200){
        let getPurcesButton = document.getElementById('discound-button');
        getPurcesButton.removeAttribute('disabled' , true) ;
    }
    // this condision for remov attribute in purces button when total price getter then 0
    if (newPrice > 0){
        let getPurcesButton = document.getElementById('button-purces');
        getPurcesButton.removeAttribute('disabled' , true) ;
    }
}

