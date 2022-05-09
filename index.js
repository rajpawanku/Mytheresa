import navbar from "./components/nav.js";
document.getElementById("main").innerHTML = navbar();

import footer from './components/footer.js';
document.getElementById('footer').innerHTML = footer();


let allButtons = document.querySelectorAll('.button');
allButtons.forEach(x => {
    x.addEventListener('click', () => {
        window.location.href = './womenproduct.html'
    })
})
console.log('in the womens page');