let product1 = {
    id: 1,
    title: "Microsoft Xbox X/S Wireless controller Robot White",
    imgURL: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price: 1000,
    basePrice: 1000,
    brand: "Microsoft",
    category: "Gaming",
    qty: 1
};
let product2 = {
    id: 2,
    title: "Sony WH-1000XM3 Headphones",
    imgURL: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy S22 5G.jpg",
    price: 2000,
    basePrice: 2000,
    brand: "Samsung",
    category: "audio",
    qty: 1
};
let product3 = {
    id: 3,
    title: "boAt Rockerz 370",
    imgURL: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
    price: 3000,
    basePrice: 3000,
    brand: "Boat",
    category: "audio",
    qty: 1
};
let product4 = {
    id: 4,
    title: "Xiaomi Wired Earphones",
    imgURL: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
    price: 4000,
    basePrice: 4000,
    brand: "Xiaomi",
    category: "audio",
    qty: 1
};

let products = [product1, product2, product3, product4];

function displayProducts(items) {
    if (items.length === 0) {
        document.getElementById('data-ele').innerHTML = "Cart is Empty 😯";
        return;
    }

    let eachItem = "";
    for (let item of items) {
        eachItem += `
            <div class="col-md-3">
                <div class="card">
                    <div class="card-header">
                        <img src="${item.imgURL}" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body text-center">
                        <h4 class="text-danger">${item.brand}</h4>
                        <h5>&#8377; ${item.price}.00</h5>
                        <button class="btn btn-danger" onclick="decQty(${item.id})"><i class="fa-solid fa-minus-circle"></i></button>
                        <span class="h5 mx-2" id="qty-${item.id}">${item.qty}</span>
                        <button class="btn btn-success" onclick="incQty(${item.id})"><i class="fa-solid fa-plus-circle"></i></button>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById('data-ele').innerHTML = eachItem;
}

displayProducts(products);
function incQty(id) {
    products = products.map(item => {
        if (item.id === id) {
            let newQty = item.qty + 1;
            return { ...item, qty: newQty, price: newQty * item.basePrice };
        }
        return item;
    });
    displayProducts(products);
    //calculateTotal();
}

function decQty(id) {
    products = products.map(item => {
        if (item.id === id) {
            let newQty = item.qty > 1 ? item.qty - 1 : 1;
            return { ...item, qty: newQty, price: newQty * item.basePrice };
        }
        return item;
    });
    displayProducts(products);
    //calculateTotal();
}

function calculateTotal() {
    let total = 0;
    for (let item of products) {
        total += item.price; //  already total (price = basePrice * qty)
    }
    document.getElementById('total-price').textContent = total;
}


displayProducts(products); // initial load
//calculateTotal();
