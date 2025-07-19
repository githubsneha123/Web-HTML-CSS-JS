let products=[];
function fetchData()
{
    let xhr=new XMLHttpRequest();

    xhr.open('GET','./products.json',true);

    xhr.send();

xhr.addEventListener('progress',function()
{
    //window.alert("Data is Loading");
})

xhr.addEventListener('load',function()
{
    let getData=JSON.parse(xhr.responseText);
    console.log(getData,typeof getData);
    console.log(getData.arrayOfProducts);
    products=getData.arrayOfProducts;
    displayProducts(getData.arrayOfProducts);
})
}
fetchData();

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