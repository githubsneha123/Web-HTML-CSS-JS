let mSecEle=document.getElementById('m-sec-el');
let secEle=document.getElementById('sec-el');
let minEle=document.getElementById('min-el');

let startBtn=document.getElementById('start-btn');
let stopBtn=document.getElementById('stop-btn');
let resetBtn=document.getElementById('reset-btn');

let mSec=0;
let sec=0;
let min=0;

let dummyVar=true;

function timer(){
    mSec=mSec+10
    if(mSec==1000){
        sec=sec+1;
        mSec=0;

        if(sec==60){
            min=min+1;
            sec=0;
        }
    }

    mSecEle.textContent=concatZero(mSec);
    secEle.textContent=concatZero(sec);
    minEle.textContent=concatZero(min);
}

let interval=null;
startBtn.addEventListener('click',function(){
    if(dummyVar){
        interval=setInterval(timer,100);
        dummyVar=false;
    }
})

stopBtn.addEventListener('click',function(){
    if(!dummyVar){
        clearInterval(interval);
        dummyVar=true;
    }
})

resetBtn.addEventListener('click',function(){
    clearInterval(interval);
    dummyVar=true;
    min=0;
    sec=0;
    mSec=0;
    mSecEle.textContent="00";
    secEle.textContent="00";
    minEle.textContent="00";
})


function concatZero(time){
     if(time<=9) return "0"+time;
     else return time;
}