 let likesBtn=document.querySelector('#likes-btn');
let dislikesBtn=document.querySelector('#dislikes-btn');
let likesEle=document.querySelector('#likes');
let dislikesEle=document.querySelector('#dislikes');
let totalEle=document.querySelector('#total');

let likes=localStorage.getItem('likes')?Number(localStorage.getItem('likes')):0;
let dislikes=localStorage.getItem('dislikes')?Number(localStorage.getItem('dislikes')):0;
//let total=0;

likesEle.textContent=likes;
dislikesEle.textContent=dislikes;
totalEle.textContent=likes+dislikes;

function likesCount(){
    likes++;
    localStorage.setItem('likes',likes);
    likesEle.textContent=localStorage.getItem('likes');
    updateTotal();
}
likesBtn.addEventListener('click',likesCount);

function dislikesCount(){
    dislikes++;
    localStorage.setItem('dislikes',dislikes);
    dislikesEle.textContent=localStorage.getItem('dislikes');
    updateTotal();
}
dislikesBtn.addEventListener('click',dislikesCount);

function updateTotal(){
    //localStorage.setItem('total',likes+dislikes);
    totalEle.textContent=likes+dislikes;
}