let items = document.querySelectorAll(".slider .list-items .item")
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item")


let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
let refreshInterval = setInterval(() => {
    next.click()
}, 3000)
function showSlider(){
    //remove active class
    let itemActiveOld = document.querySelector(".slider .list-items .item.active");
    let thumbnailACtiveOld = document.querySelector(".thumbnail .item.active")
    itemActiveOld.classList.remove('active');
    thumbnailACtiveOld.classList.remove('active')

    //add active class
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click()
    }, 3000)
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', ()=>{
        itemActive = index;
        showSlider();
    })
})