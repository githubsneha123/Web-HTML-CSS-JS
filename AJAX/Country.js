function makeAjaxCall(country){
    let xhr=new XMLHttpRequest();
    xhr.open('GET',`https://restcountries.com/v3.1/name/${country}`,true);
    xhr.send();
    return xhr;
}

function displayCountry(country){
    console.log(country);
    let htmlCode=`<div class="col-md-4">
                     <div class="card">
                        <div class="card-header">
                            <img src="${country.flags.png}" alt="" class="img-fluid">
                        </div>
                        <div class="card-body text-center">
                            <h1>${country.name.common}</h1>
                            <h2>${country.capital[0]}</h2>
                            <h3>${(country.population/1000000).toFixed(2)} M </h3>
                        </div>
                    </div>
                  </div>`;

    let dataEle=document.getElementById('data-ele');
    dataEle.insertAdjacentHTML('beforeend',htmlCode);
}

function getData(){
    //make ajax call to bharat

    let req1=makeAjaxCall('bharat');
    req1.addEventListener('load',function(){
        let serverData=JSON.parse(req1.responseText);
        let data=serverData[0];
        displayCountry(data);


        //make ajax call to USA

        let req2=makeAjaxCall('usa');
        req2.addEventListener('load',function(){
            let serverData=JSON.parse(req2.responseText);
            let data=serverData[0];
            displayCountry(data);

            //make ajax call to pak

            let req3=makeAjaxCall('pak');
            req3.addEventListener('load',function(){
                let serverData=JSON.parse(req3.responseText);
                let data=serverData[0];
                displayCountry(data);
            })
        })

    });
}
getData();