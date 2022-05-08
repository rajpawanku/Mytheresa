import {myFunction1,myFunction2,myFunction3,myFunction4,} from "../mycomponents/import.js";
import {append,onhover,offhover,productdetail} from "../mycomponents/import.js";
document.getElementById("toggle1").addEventListener("click",myFunction1);
document.getElementById("toggle2").addEventListener("click",myFunction2);
document.getElementById("toggle3").addEventListener("click",myFunction3);
document.getElementById("toggle4").addEventListener("click",myFunction4);

let data=JSON.parse(localStorage.getItem("MENSDATA"));
console.log(data);

document.getElementById("nproducts").innerText=data.length+" products";
append(data);

// Sort items

function sortfunction(){
  var selected=document.getElementById("sortprod").value;
  if(selected=="htl"){
  data.sort(function(a,b){
    if(a.price>b.price) return -1;
    if(a.price<b.price) return 1;
    return 0;
  });
  append(data);
}
else if(selected=="lth"){
  data.sort(function(a,b){
    if(a.price>b.price) return 1;
    if(a.price<b.price) return -1;
    return 0;
  });
  append(data);
}
}
// Filter function

function filterfunction(id){
  let result;
  if(id=="black"){
    result=data.filter(function(el){
      return el.color=="black";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="brown"){
    result=data.filter(function(el){
      return el.color=="brown";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="pink"){
    result=data.filter(function(el){
      return el.color=="pink";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="green"){
    result=data.filter(function(el){
      return el.color=="green";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="multi"){
    result=data.filter(function(el){
      return el.color=="multi";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="red"){
    result=data.filter(function(el){
      return el.color=="red";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="gold"){
    result=data.filter(function(el){
      return el.color=="gold";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="nensi"){
    result=data.filter(function(el){
      return el.name=="NENSI DOJAKA";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="oseree"){
    result=data.filter(function(el){
      return el.name=="OSÉREE";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="gucci"){
    result=data.filter(function(el){
      return el.name=="GUCCI KIDS";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="auralee"){
    result=data.filter(function(el){
      return el.name=="AURALEE";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
  if(id=="bottega"){
    result=data.filter(function(el){
      return el.name=="BOTTEGA VENETA";
    });
    append(result);
    document.getElementById("nproducts").innerText=result.length+" products";
  }
}
// filter and sort function getting ids

 document.getElementById("sortprod").addEventListener("change",sortfunction);
 document.getElementById("black").addEventListener("click",function(){
   filterfunction(this.id);
 }); 
 document.getElementById("brown").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("green").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("pink").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("red").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("gold").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("multi").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("auralee").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("bottega").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("gucci").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("nensi").addEventListener("click",function(){
  filterfunction(this.id);
});
document.getElementById("oseree").addEventListener("click",function(){
  filterfunction(this.id);
});
