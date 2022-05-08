function myFunction1() {
    document.getElementById("designer").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("size").classList.toggle("show");
  }
  function myFunction3() {
    document.getElementById("colors").classList.toggle("show");
  }
  function myFunction4() {
    document.getElementById("pattern").classList.toggle("show");
  }

// Append products function

function append(data){
    let condiv=document.getElementById("productlist");
    condiv.innerHTML=null;
  data.forEach(function(el){
    let image=document.createElement("img");
    image.setAttribute("id",el.id);
    image.addEventListener("mouseover",function(){
      onhover(el,this.id,event,"divtoshow");
    });
    image.addEventListener("mouseout",function(){
      offhover(el,this.id,event,"divtoshow");
    });
    image.src=el.image_url1;
    let name=document.createElement("h3");
    name.setAttribute("class","h3");
    name.innerText=el.name;
    let price=document.createElement("p");
    price.setAttribute("class","price");
    price.innerText="€"+el.price;
    let des=document.createElement("p");
    des.setAttribute("class","grey");
    des.innerText=el.description;
    let div=document.createElement("div");
    div.addEventListener("click",function(){
      productdetail(el);
    });
    div.append(image,name,des,price);
    condiv.append(div);
  });
  }

  // Image hover size chart visibility

function onhover(el,id,e,divid){
    let image=document.getElementById(id);
    image.src=el.image_url2;
    var left  = e.clientX  + "px";
      var top  = e.clientY  + "px";
  
      let div = document.getElementById(divid);
  
      div.style.left = left;
      div.style.top = top;
  
      $("#"+divid).toggle();
      return false;
  }
  function offhover(el,id,e,divid){
    let image=document.getElementById(id);
    image.src=el.image_url1;
    var left  = e.clientX  + "px";
      var top  = e.clientY  + "px";
  
      let div = document.getElementById(divid);
  
      div.style.left = left;
      div.style.top = top;
  
      $("#"+divid).toggle();
      return false;
  }

//   Product detail page direction
  function productdetail(el){
    localStorage.setItem("selectedprod",JSON.stringify(el));
    window.location.href="productdetail.html";
  
  }

 export {myFunction1,myFunction2,myFunction3,myFunction4};
 export {append,onhover,offhover,productdetail};