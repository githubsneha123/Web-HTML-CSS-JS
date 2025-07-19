function fetchData(){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://fakestoreapi.in/api/products',true);
    xhr.send();
    xhr.addEventListener('progress',function(){
        //window.alert("Data is loading...");
    });
    xhr.addEventListener('load',function(){
        // let getData=xhr.responseText;
        // console.log(getData);
        // console.log(typeof getData);

        //console.log(xhr.response);
        let getData1=JSON.parse(xhr.responseText);
        console.log(getData1);
        console.log(typeof getData1);
    });
}
fetchData();