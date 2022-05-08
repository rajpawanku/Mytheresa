function navbar() {
  let x = `
    <div id="navfir">
        <div id="navmen">
           <p class="p"> <a class="chnge" href="./index.html">WOMEN</a> </p>
           <p class="p"> <a class="chnge" href="./mens.html">MEN</a> </p>
           <p class="p"> <a class="chnge" href="./kids.html">KIDS</a> </p>
        </div>

        <div id="navacc">
            <p class="p1">Signup for Newsletter</p>
            <div class="myaccount">
                <p class="p1" id="p1">My account</p>
             <div class="myhover">
                 <div class="welcomdiv">
                    <p class="welcome">WELCOME!</p>
                    <input type="text" class="inputac" id="login_email" placeholder="Your E-Mail">
                    <input type="password" class="inputac" id="login_pass" placeholder="Password">
                    <br>
                    <button id="login">LOGIN</button>
                 </div>
                 <div style="background-color: white;">
                    <p class="pdeaitls">If you have an account with us, log in
                        using your email address and
                         password.
                    </p>
                  <p class="pdeaitls">Did You forget your password ?</p>  
                 <button class="create"><a class="chnge" style="color:white;" href="login.html">CREATE AN ACCOUNT</a>  </button>
                 </div>
             </div>   
            </div>
            <p class="p1">My wishlist</p>
            <p class="p1">International | English</p>
        </div>
    </div>
<!-- 1st nave end -->
    <div id="navthir">
        <div id="imgmy">
       <a href="index.html"><img id="imgmyth" src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220420T172422" alt=""></a>     
        </div>
      
        <!--  -->
        <div id="navshop">
            <p class="p2">SHOPPING BAG</p> <span><i id="bag" class="fa-solid fa-bag-shopping"></i></span>
        </div>
    </div>


    <!-- Hover start  -->
     <div id="hover"> 
      
         <div class="nav2child2"> 

            <div class="dropdown" >

                <button class="dropbtn">  <a href="#" class="chnge"> NEW ARRIVALS </a> </button>

          <div class="dropdown-content">
   <table>
                
<tr>
<th>JUST IN</th>
<th >DISCOVER</th>
</tr>

<tr>
<td><a  href="#">This Week</a></td>
<td><a href="">Party</a> </td>
</tr>

<tr>
  <td><a href="#">Previous Weeks</a></td>
  <td><a href="">Essentials</a></td>
</tr>

<tr>
  <td><a href="">Clothing</a></td>
  <td><a href="">Wedding Guest</a></td>
</tr>

<tr>
  <td><a href="">Shoes</a> </td>
  <td><a href="">Bridal</a></td> 
</tr>

<tr>
  <td><a href="">Bags</a></td>
  <td><a href="">Back in Stock</a></td>
</tr>

<tr>
  <td><a href="">Accessories</a></td>
 <td><a href="">Shoes & Bags of the Season</a></td>
</tr>

<tr>
  <td><a href=""></a></td>
  <td><a href="">Stories</a></td>
</tr>

</table>


</div>
</div>
</div> 

<!-- Second Button -->
<div class="dropdown1" >

<button class="dropbtn1">  <a href="#" class="chnge">  DESIGNERS </a> </button>

<div class="dropdown-content1"  >

<table>

<tr>
<th>TOP 20</th>
<th > </th>
<TH>SHOP BY CATEGORY</TH>
</tr>

<tr>
<td><a  href="#">Acne Studios</a></td>
<td><a href="">Gucci</a> </td>
<td><a href="">Clothing</a></td>
</tr>

<tr>
<td><a href="#">Alexander McQueen</a></td>
<td><a href="">Lemaire</a></td>
<td><a href="">Shoes</a></td>
</tr>

<tr>
<td><a href="">Ami Paris</a></td>
<td><a href="">Loewe</a></td>
<td><a href="">Bags</a></td>
</tr>

<tr>
<td><a href="">AMIRI</a> </td>
<td><a href="">Loro Piana</a></td> 
<td><a href="">Accessories</a></td>
</tr>

<tr>
<td><a href="">Balenciaga</a></td>
<td><a href="">Maison Margiela</a></td>
<td><a href="">Exclusive</a></td>
</tr>

<tr>
<td><a href="">Bottega Veneta</a></td>
<td><a href="">Prada</a></td>

</tr>

<tr>
<td><a href="">Brunello Cucinelli</a></td>
<td><a href="">Saint Laurent</a></td>
</tr>

<tr>
<td> <a href="">Burberry</a></td>
<td><a href="">Stone Island</a></td>
</tr>

<tr>
<td> <a href="">Christian Louboutin</td>
<td><a href="">Thom Browne</a></td>
</tr>

<tr>
<td> <a href="">Givenchy</td>
<td><a href="">Tom Ford</a></td>
</tr>

<tr>
<td> <a href=""></td>
<td><a href="">Designer A-Z</a></td>
</tr>

</table>

</div>
</div>
<!-- Third button -->
<div class="dropdown1" >

<button class="dropbtn1">  <a href="#" class="chnge"> CLOTHING </a> </button>

<div class="dropdown-content1" id="left3">

<table>

<tr>
<th>SHOP BY CATEGORY</th>
<th >TOP BRANDS</th>
<th>DISCOVER</th>
</tr>

<tr>
<td><a  href="#">Jackets</a></td>
<td><a href="">Acne Studios</a> </td>
<td><a href="">New clothing arrivals</a> </td>
</tr>

<tr>
<td><a href="#">Sweats</a></td>
<td><a href="">Alexander McQueen</a></td>
<td><a href="">Essentials clothing</a> </td>
</tr>

<tr>
<td><a href="">Knitwear</a></td>
<td><a href="">Ami Paris</a></td>
<td><a href="">Exclusive clothing</a> </td>
</tr>

<tr>
<td><a href="">Coats</a> </td>
<td><a href="">Amiri</a></td> 
</tr>

<tr>
<td><a href="">T-Shirts</a></td>
<td><a href="">Balenciaga</a></td>
</tr>

<tr>
<td><a href="">Shirts</a></td>
<td><a href="">Brunello Cucinelli</a></td>
</tr>

<tr>
<td><a href="">Pants</a></td>
<td><a href="">Burberry</a></td>
</tr>

<tr>
<td><a href="">Polo Shirts</a></td>
<td><a href="">Givenchy</a></td>
</tr>

<tr>
<td><a href="">Shorts</a></td>
<td><a href="">Gucci</a></td>
</tr>

<tr>
<td><a href="">Jeans </a></td>
<td><a href="">Loro Piana</a></td>
</tr>

<tr>
<td><a href="">Aactivewear</a></td>
<td><a href="">Mason Margiela</a></td>
</tr>

<tr>
<td><a href="">Triloring</a></td>
<td><a href="">Prada</a></td>
</tr>

<tr>
<td><a href="">Swimwaear</a></td>
<td><a href="">Tom Ford</a></td>
</tr>

</table>

</div>
</div>
<!-- Forth Button -->
<div class="dropdown1" >

<button class="dropbtn1">  <a href="#" class="chnge"> SHOES</a> </button>

<div class="dropdown-content1" id="left4">

<table>

<tr>
<th>SHOP BY CATEGORY</th>
<th >TOP BRANDS</th>
<th>DISCOVER</th>
</tr>

<tr>
<td><a  href="#">Sneakers</a></td>
<td><a href="">Alexander McQueen</a> </td>
<td><a href="">New shoe arrivals</a> </td>
</tr>

<tr>
<td><a  href="#">Sandals & slides</a></td>
<td><a href="">Amiri</a> </td>
<td><a href="">Essential shoes</a> </td>
</tr>

<tr>
<td><a href="#">Loafers </a></td>
<td><a href="">Balenciaga</a></td>
<td><a href="">Exclusive shoes</a> </td>
</tr>

<tr>
<td><a href="">Boots</a></td>
<td><a href="">Bottega Veneta</a></td>

</tr>

<tr>
<td><a href="">Formal shoes</a> </td>
<td><a href="">Christan Louboutin</a></td> 
</tr>

<tr>
<td><a href="">Debrby shoes</a></td>
<td><a href="">Gucci</a></td>
</tr>

<tr>
<td><a href="">Slippers</a></td>
<td><a href="">Lanvin</a></td>
</tr>

<tr>
<td><a href="">Espandrilles</a></td>
<td><a href="">Loro Piana</a></td>
</tr>

<tr>
<td><a href="">Summer Shoes</a></td>
<td><a href="">Maison Marrgiela</a></td>
</tr>

<tr>
<td><a href=""></a></td>
<td><a href="">Prada</a></td>
</tr>

<tr>
<td><a href=""> </a></td>
<td><a href="">Saint Laurent</a></td>
</tr>

<tr>
<td><a href=""></a></td>
<td><a href="">Tod's</a></td>
</tr>

</table>

</div>
</div>

<!-- Fifth button -->
<div class="dropdown1" >

<button class="dropbtn1">  <a href="#" class="chnge"> BAGS </a> </button>

<div class="dropdown-content1" id="left5">

<table>

<tr>
<th>SHOP BY CATEGORY</th>
<th >TOP BRANDS</th>
<th>DISCOVER</th>
</tr>

<tr>
<td><a  href="#">Crossbody bags</a></td>
<td><a href="">Balenciaga</a> </td>
<td><a href="">New bag arrivals</a> </td>
</tr>

<tr>
<td><a  href="#">Totes</a></td>
<td><a href="">Borrega Veneta</a> </td>
<td><a href="">Essential bags</a> </td>
</tr>

<tr>
<td><a href="#">Travel bags </a></td>
<td><a href="">Burberry</a></td>
<td><a href="">Exclusive Bags</a> </td>
</tr>

<tr>
<td><a href="">Briefcases</a></td>
<td><a href="">Christian Louboutin</a></td>

</tr>

<tr>
<td><a href="">Backpacks</a> </td>
<td><a href="">Givenchy</a></td> 
</tr>

<tr>
<td><a href="">Belts bags</a></td>
<td><a href="">Gucci</a></td>
</tr>

<tr>
<td><a href="">Pouches</a></td>
<td><a href="">Jacquemus</a></td>
</tr>

<tr>
<td><a href="">Mini Bags</a></td>
<td><a href="">Lemaire</a></td>
</tr>

<tr>
<td><a href="">Summer Shoes</a></td>
<td><a href="">Maison Marrgiela</a></td>
</tr>

<tr>
<td><a href=""></a></td>
<td><a href="">Maison Marfiela</a></td>
</tr>

<tr>
<td><a href=""> </a></td>
<td><a href="">Saint Laurent</a></td>
</tr>

</table>

</div>
</div>

<!-- Sixth button -->
<div class="dropdown2">

<button class="dropbtn1">  <a href="#" class="chnge">ACCESSORIES </a> </button>

<div class="dropdown-content2" id="left6">

<table>

<tr>
<th>SHOP BY CATEGORY</th>
<th >TOP BRANDS</th>
<th>DISCOVER</th>
</tr>

<tr>
<td><a  href="#">Hats</a></td>
<td><a href="">Acne Studios</a> </td>
<td><a href="">New Accessories arrivals</a> </td>
</tr>

<tr>
<td><a  href="#">Wallets</a></td>
<td><a href="">Balenciaga</a> </td>
<td><a href="">Essential Accessories </a> </td>
</tr>

<tr>
<td><a href="#">Jewelry </a></td>
<td><a href="">Bottega Veneta</a></td>
<td><a href="">Exclusive Accessories</a> </td>
</tr>

<tr>
<td><a href="">Belts</a></td>
<td><a href="">Burberry</a></td>

</tr>

<tr>
<td><a href="">Scarves</a> </td>
<td><a href="">Givenchy</a></td> 
</tr>

<tr>
<td><a href="">Sunglasss</a></td>
<td><a href="">Gucci</a></td>
</tr>

<tr>
<td><a href="">Travel & Lifestyle</a></td>
<td><a href="">Jacquemus</a></td>
</tr>

<tr>
<td><a href="">Ties & bowties</a></td>
<td><a href="">Loewe</a></td>
</tr>

<tr>
<td><a href="">Tech ACCESSORIES</a></td>
<td><a href="">Loro Pina</a></td>
</tr>

<tr>
<td><a href="">Gloves</a></td>
<td><a href="">Maison Marigiela</a></td>
</tr>

<tr>
<td><a href="">Cufflinks & tie clips </a></td>
<td><a href="">Show all Designer</a></td>
</tr>

</table>

</div>
</div>
<!-- seventh -->
<div class="dropdown1" >

<button class="dropbtn1">  <a href="#" class="chnge">VACATION SHOP</a> </button>

<div class="dropdown-content1" id="left7" style="height: 425px; width: 1140px;" >

<table>

<div id="gridimg">
<img id="imgvv" src="https://i.pinimg.com/originals/82/a3/d6/82a3d695afa213d1240b5dfe6775dcf2.jpg" alt="">
<img id="imgvv" src="https://images.news18.com/ibnlive/uploads/2017/06/travel_mobile_AFP.jpg?impolicy=website&width=510&height=356" alt="">
<img id="imgvv" src="https://www.beyoung.in/blog/wp-content/uploads/2019/04/vest-2.jpg" alt="">
<img id="imgvv" src="https://nextluxury.com/wp-content/uploads/Man-Wearing-Gray-Winter-Coat.jpg" alt="">
<img id="imgvv" src="https://cdn.tatlerasia.com/asiatatler/i/my/2021/05/17121247-3_cover_1920x1200.png" alt="">
<img id="imgvv" src="https://www.fashionbeans.com/wp-content/uploads/2017/05/5shoesmain10.jpg" alt=""> 

<img id="imgvv" src="https://images.news18.com/ibnlive/uploads/2017/06/travel_mobile_AFP.jpg?impolicy=website&width=510&height=356" alt="">
<img id="imgvv" src="https://nextluxury.com/wp-content/uploads/Man-Wearing-Gray-Winter-Coat.jpg" alt="">
</div>

<tr>
<!-- <th >DISCOVER</th> -->
</tr>

</table>

</div>
</div>

<!-- Eight -->
<div class="dropdown1" >

<button class="dropbtn1">  <a href="#" class="chnge">SALES</a> </button>

<div class="dropdown-content1" id="left8" style="min-width: 700px;" >

<table>

<tr>
<th >SHOP BY CATEGORY</th>
</tr>

</table>
<div id="divshow">

<div style="height: 250px;border: 1px solid white;">
<h1 id="sale">SALE</h1>
</div>

</div>

</div>
</div> 

<input id="input" type="text" placeholder="Search for.." >
<span id="span2"><i class="fa-solid fa-magnifying-glass"></i></span>

</div> `
  return x;

}

export default navbar;