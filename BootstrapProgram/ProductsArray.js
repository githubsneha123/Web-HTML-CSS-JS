let product1={id:1,title:"Microsoft Xbox X/S Wireless Controller Robot White",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price:1000,brand:"Microsoft",category:"Gaming",qty:1};

let product2={id:2,title:"Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price:2000,brand:"Sony",category:"Audio",qty:1};  

let product3={id:3,title:"Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
    price:3000,brand:"Logitech",category:"Gaming",qty:1};

let product4={id:3,title:"Urbanista Los Angeles Sand Gold - World’s 1st Solar Powered Hybrid Active Noise Cancelling with Mic Premium Wireless Headphones, Unlimited Playtime",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
    price:4000,brand:"Urbanista",category:"Audio",qty:1};

let products=[product1,product2,product3,product4];

function displayProducts(items){ //passing array reference
    if(items.length==0){
        document.getElementById('data-ele').innerHTML="Cart is Empty";
        return;
    }
    let eachItem="";
    for(let item of items){
        eachItem+=`<div class="col-md-3">
                <div class="card">
                    <div class="header">
                        <img src="${item.imgURL}" alt="" class="img-fluid">
                    </div>
                    <div class="card-body text-center">
                         <h3 class="text-danger">${item.brand}</h3>
                         <h3>&#8377; ${item.price}.00</h3>
                         <button class="btn btn-danger" id="dec-btn"><i class="fa-solid fa-minus-circle"></i></button>
                         <span class="h2" id="qty">${item.qty}</span>
                         <button class="btn btn-success" id="inc-btn"><i class="fa-solid fa-plus-circle"></i></button>
        
                    </div>
                </div>
            </div>`;
    }

    document.getElementById('data-ele').innerHTML=eachItem; //DOM IS UPDATED
}
displayProducts(products)