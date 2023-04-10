const basketPrices = document.querySelectorAll('.basket__price');
console.log(basketPrices);

// let sum = 0;

// for(let i =0; i < basketPrices.length; i++){
//     sum = sum + (+basketPrices[i].textContent);
// }
// console.log(sum);

let sum = 0;
Array.from(basketPrices).map((item, i) => {
    let price = +item.dataset.price;
    let quantity = +item.dataset.quantity;
    sum += price * quantity;
    return sum;
});

//let sum = Array.from(basketPrices).reduce(
//    (accum,item) => accum += +item.dataset.price, 0);

console.log(sum);
document.querySelector('.basket__total').textContent = sum;


const button =document.querySelector("#coupon__discount");
button.addEventListener("click",calculateAmount);

function calculateAmount(e){
    e.preventDefault();

    document.querySelector('.basket__total').textContent = 
    Math.round(sum - button.dataset.discountPercent * sum / 100, 2); 
}

//--//------------//----------//----------//------------//-----------//-------//
// const dogImage= document.querySelector("#dogImage");

// dogImage.addEventListener("mouseover",function(){
//     //1.Та же вкладка
//     document.location.assign("https://unsplash.com/s/photos/dog");
//    // 2. Другая вкладка
//     window.open("https://unsplash.com/s/photos/dog","_blank");
// })

// const submitButton = document.getElementById("submitButton");
// submitButton.addEventListener("click", function() {
//   window.open("https://unsplash.com/s/photos/dog");
// });





