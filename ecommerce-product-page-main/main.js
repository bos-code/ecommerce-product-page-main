const cartBtn = document.querySelector(".cart");
const cartCount = document.querySelector(".qty");
const counter = document.querySelector(".counter");
const addTo = document.querySelector('.add-to-cart')
const cartContainer = document.querySelector('.cart-container')

const counterFunc = function (e) {
    let countStart = 10
    // e.preventDefault();
  if (e) {
    const opera = e.target;
    const plus = opera.closest(".counter").querySelector(".plus");
    const substra = opera.closest(".counter").querySelector(".minus");
    const count = opera.closest(".counter").querySelector(".count");
    count.textcontent = toString(cartCount)

    if(el = plus){
        countStart ++
        console.log(plus);
    }
    if(el = substra && countStart > 0){
        countStart --
        console.log(substra);
    }
    
    console.log("its working");
    console.log(count);
  }
};
const displayCart = function() {
    cartContainer.classList.toggle('none')
}

addTo.addEventListener('click', displayCart)

counter.addEventListener("click", counterFunc);
