let product1={id:1,title:"Microsoft Xbox X/S Wireless controller Robot White",imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",price:1000,brand:"Microsoft",category:"Gaming",qty:1};
let product2={id:2,title:"Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy S22 5G.jpg",price:2000,brand:"Samsung",category:"Audio",qty:1};
let product3={id:3,title:"boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0, with Mic (Buoyant Black)",imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",price:3000,brand:"Boat",category:"Gaming",qty:1};
let product4={id:4,title:"Xiaomi Wired in-Ear Earphones with Mic, Ultra Deep Bass & Metal Sound Chamber (Blue)",imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",price:4000,brand:"Xiaomi",category:"Audio",qty:1};

let products=[product1,product2,product3,product4];
function displayProducts(items)  //passing array reference
{
    if(items.length==0)
    {
        document.getElementById('data-ele').innerHTML="Cart is Empty😯";
        return;
    }
    let eachItem="";
    for(let  item of items)
    {
        eachItem+=`<div class="col-md-3 animate__animated animate__flipInX">
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
     document.getElementById('data-ele').innerHTML=eachItem;//DOM is updated

}

// Increment and decrement

displayProducts(products);
function incQty(id){
    let newArr=[];
    for(let item of products){
        if(item.id==id){
        let newObj={...item,qty:++item.qty,price:item.qty*item.price};
        newArr.push(newObj);
       }
       else{
        newArr.push(item);
       }
    }
    displayProducts(newArr);
}

function decQty(id){
    let newArr=products.map(function(item){
        if(item.id==id)
            return {...item,qty:(item.qty>1)?--item.qty:1,price:item.qty*item.price}; //return as object
        else
            return item;
         
    });
    displayProducts(newArr);
}

//filter buttons
function audioProducts(){
    let newArr=[];
    for(let item of products){
        if(item.category=="Audio") newArr.push(item);
    }
    displayProducts(newArr);
}

let audioBtn=document.getElementById('audio-btn');
audioBtn.addEventListener('click',audioProducts);

function gamingProducts(){
    let newArr=products.filter(item=>item.category=="Gaming");
    displayProducts(newArr);
}

let gamingBtn=document.getElementById('gaming-btn');
gamingBtn.addEventListener('click',gamingProducts);

//reload to home page
let Home=document.getElementById('home');
Home.addEventListener('click',()=>{
    displayProducts(products);
});


