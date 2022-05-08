function myFunction1() {
  document.getElementById("styledetail").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("sizefit").classList.toggle("show");
}
function myFunction3() {
  document.getElementById("delivery").classList.toggle("show");
}
document.getElementById("toggle1").addEventListener("click",myFunction1);
document.getElementById("toggle2").addEventListener("click",myFunction2);
document.getElementById("toggle3").addEventListener("click",myFunction3);

// Image slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

let product=JSON.parse(localStorage.getItem("selectedprod"));
console.log(product);
let img1=document.getElementById("img1");
img1.src=product.image_url1;
let img2=document.getElementById("img2");
img2.src=product.image_url2;
let pname=document.getElementById("pname");
pname.innerText=product.name;
let pdes=document.getElementById("pdes");
pdes.innerText=product.description;
let pprice=document.getElementById("pprice");
pprice.innerText="€"+product.price;
imgdiv=document.getElementById("orgimg");
imgdiv.src=product.image_url2;

// Adding to cart

function addToCartNew(el) {

    cartlist= JSON.parse(localStorage.getItem("Cart")) ||  [];
 cartlist.push(el)
    localStorage.setItem("Cart",JSON.stringify(cartlist));
    alert("item Added to cart");
  }
  document.getElementById("addtocart").addEventListener("click",function(){
    addToCartNew(product)});
