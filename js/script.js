
// ////menu/////
// function menuFunc() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// ///////addresses////////

// // function arrowToDown() {
// //     document.getElementById("arrowMenu").classList.toggle("showAddresses");
// // }


// var i = document.querySelector('.arrowToDown');
// i.addEventListener('mouseover', function () {
//     i.classList.remove('arrowToDown');
//     i.classList.add('show');
// });







window.addEventListener('DOMContentLoaded', function () {
     baskets = document.querySelector('.baskets');
     close = document.querySelector('.close');

    
     

    function createCart() {
        basketOn = document.createElement('div');
        buttonClose = document.createElement('button');

        basketOn.classList.add('basket-on');
        buttonClose.classList.add('close');

        buttonClose.textContent = 'Закрыть';

        document.body.appendChild(basketOn);
        basketOn.appendChild(buttonClose);
    };
    createCart();


    function openCart(){
        basketOn.style.display = 'block';
    };

    function closeCart(){
        basketOn.style.display = 'none';
    };

    baskets.addEventListener('click',openCart);
    buttonClose.addEventListener('click',closeCart);
    document.querySelector('.wrapper').addEventListener('mouseup',closeCart);


    
    positions = document.querySelectorAll('.positions');
    bottonBuy = document.querySelectorAll('.bottonBuy');
    flagNew = document.querySelectorAll('.flagNew');
    price = document.querySelectorAll('.price');

    for(i = 0;i < bottonBuy.length;i++){
        bottonBuy[i].addEventListener('click', function(){
           let p = positions[i].cloneNode(true),
               btn = p.querySelector('bottonBuy');

            btn.remove();
            baskets.appendChild(p);
            positions[i].remove();
        });
    };
  






});















