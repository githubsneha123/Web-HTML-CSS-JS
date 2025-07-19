let product1={id:1,title:"Microsoft Xbox X/S Wireless controller Robot White",imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price:1000,brand:"Microsoft",category:"Gaming",qty:1};

let product2={id:1,title:"Xiaomi Wired in-Ear Earphones with Mic, Ultra Deep Bass & Metal Sound Chamber (Blue)",imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
    price:2000,brand:"Logitech G",category:"Gaming",qty:1};

let product3={id:1,title:"Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 30Hr Battery, 3 Min Quick Charge = 3 Hours Playback, Multi Point Connectivity, Alexa-Silver",imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
    price:3000,brand:"Sony",category:"Audio",qty:1};

let product4={id:1,title:"Urbanista Los Angeles Sand Gold - World’s 1st Solar Powered Hybrid Active Noise Cancelling with Mic Premium Wireless Headphones, Unlimited Playtime",imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
    price:4000,brand:"Urbanista",category:"Audio",qty:1};

let products=[product1,product2,product3,product4];


function displayProducts(items)
    {
        if(items.length==0)
        {
            document.getElementById('data-ele').innerHTML="please add items in cart";
            return;
        }
        let eachItem="";
        for(let item of items)
        {
          eachItem+= `<div class="col-md-3 ">
                <div class="card">
                    <div class="card-header">
                         <img src="${item.imgURL}" alt=""class="img-fluid">
                    </div>
                    <div class="card-body text-center">
                        <h4 class="text-danger">${item.brand}</h4>
                        <h2>&#8377; ${item.price}.00</h2>
                        <button class="btn btn-danger" onclick="decQty(${item.id})"><i class="fa-solid fa-minus-circle"></i></button>
                        <span class="h2" id="qty-el">${item.qty}</span>
                        <button class="btn btn-success" onclick="incQty(${item.id})"><i class="fa-solid fa-plus-circle"></i></button>
                    </div>
                </div>
            </div>`;
        }
 document.getElementById('data-ele').innerHTML=eachItem;
}
displayProducts(products);
if(products.length>0)displayProducts(products);

function incQty(id)
{
    let newArr=[];
    for(let item of products){
        if(item.id==id)
        {
            let newObj={...item,qty:++item.qty};
            newArr.push(newObj);
        }
        else{
            newArr.push(item);
        }
    }
    displayProducts(newArr);
}
function decQty(id)
{
    let newArr=products.map(function(item)
    {
        if(item.id==id)
        return {...item,qty:(item.qty>1)?--item.qty:1};
    else
       return item;
    })
    displayProducts(newArr);
}

function audioProducts()
{
    let newArr=[];
    for(let item of products)
    {
        if(item.category=="Audio")newArr.push(item);
    }
    displayProducts(newArr);
}


let audioBtn=document.getElementById('audio-btn');
audioBtn.addEventListener('click',audioProducts);

function gamingProducts()
{
    let newArr=products.filter(item=>item.category=="Gaming");
    displayProducts(newArr);
}


let gamingBtn=document.getElementById('gaming-btn');
gamingBtn.addEventListener('click',gamingProducts);


let homeBtn=document.getElementById('home-btn');
homeBtn.addEventListener('click',()=>
{
 displayProducts(products);
});

//Search Here
let searchBox=document.getElementById('search-box');
searchBox.addEventListener('keyup',function()
{
    let enteredName=searchBox.value;
    let updatedArr=searchHere(enteredName,products);
    displayProducts(updatedArr);
})

function searchHere(value,items)
{
    value=value.toLowerCase().trim();

    let filteredProducts=[];
    for(let item of items)
    {
        let oBrandname=item.brand.toLowerCase().trim();

        if(oBrandname.includes(value))
        {
            filteredProducts.push(item);
        }
    }
    return filteredProducts;
}