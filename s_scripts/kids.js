imgArr = [
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_gucci_2x_20220501225102.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_burberry-kids_2x_20220501225104.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_zimmermann_2x_20220501225106.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_golden-goose_2x_20220501225101.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_moncler-enfant_2x_20220501225104.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_givenchy_2x_20220501225103.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_loro-piana_2x_20220501225103.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_Vilebrequin_2x_20220501225104.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_camilla_2x_20220501225103.jpg",
    "//img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_vacation-shop_2x_20220501225104.jpg"
]
let x = document.querySelectorAll('.product-image > img');
x.forEach((k, idx) => {
    x[idx].src = imgArr[idx];
})

let allButtons = document.querySelectorAll('button:not(.pre-btn, .nxt-btn)');
allButtons.forEach(x => {
    x.addEventListener('click', () => {
        window.location.href = '../s_pages/kids.html'
    })
})

let prices = document.querySelectorAll('.price');
prices.forEach(x => {
    let amt = Math.ceil(Math.random() * 35).toFixed(2);
    x.innerText = '€' + amt;
})