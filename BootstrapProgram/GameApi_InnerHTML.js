let product={id:1,title:"Microsoft Xbox X/S Wireless Controller Robot White",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price:1000,brand:"Microsoft",category:"Gaming",qty:1};

let htmlCode=`<div class="col-md-3">
                <div class="card">
                    <div class="header">
                        <img src="${product.imgURL}" alt="" class="img-fluid">
                    </div>
                    <div class="card-body text-center">
                         <h3 class="text-danger">${product.brand}</h3>
                         <h3>&#8377; ${product.price}.00</h3>
                         <button class="btn btn-danger" id="dec-btn"><i class="fa-solid fa-minus-circle"></i></button>
                         <span class="h2" id="qty">${product.qty}</span>
                         <button class="btn btn-success" id="inc-btn"><i class="fa-solid fa-plus-circle"></i></button>
        
                    <h4 class="mt-3">TPrice : &#8377;<span id="tprice"> ${product.price}</span>.00</h4>
                    </div>
                </div>
            </div>`;
// console.log(htmlCode);
// let dataEle=document.getElementById('data-ele');
// dataEle.innerHTML=htmlCode;
document.getElementById('data-ele').innerHTML=htmlCode; //DOM IS UPDATED
let incBtn=document.getElementById('inc-btn');
let decBtn=document.getElementById('dec-btn');
let tPrice=document.querySelector('#tprice');
let qtyEle=document.getElementById('qty');

incBtn.addEventListener('click',function()
{
 qtyEle.textContent=++product.qty;
 updateTprice();


});
decBtn.addEventListener('click',function()
{
    if(product.qty>1){
      qtyEle.textContent=--product.qty;
      updateTprice();
    }
    else
      product.qty=1;

});
function updateTprice(){
    tPrice.textContent=product.qty*product.price;
}