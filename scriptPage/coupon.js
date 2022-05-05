console.log("hello coupon");


function tiltePage (){
   let pageTitle = 'Gearbest Coupon Center: Free Category & Product Coupons'
  window.document.title = pageTitle ;
    console.log(pageTitle);
}

tiltePage()


let check = CouponData[0];




  console.log(check);

  // coupon function data itrote 

  for (let i = 0; i < check.length; i++) {
    
  let box = document.createElement("div");
  box.setAttribute("class","couponIndex_couponCell"); 

  let link = document.createElement("a");
  link.setAttribute("href","couponCenter.html");
  link.setAttribute("target","_blank");
  link.setAttribute("class","couponIndex_couponLink");

  let couponHead = document.createElement("div");
  couponHead.setAttribute("class","couponIndex_couponHead");
  let h4 = document.createElement("h4");
  h4.innerText = check[i].valueCost;

  let p = document.createElement("p");
  p.innerText =  check[i].valueOff;

  couponHead.append(h4,p);

  let couponBody = document.createElement("div")
  couponBody.setAttribute("class","couponIndex_couponBody");

  let couponArea = document.createElement("div");
  couponArea.setAttribute("class","couponIndex_couponArea");


  let couponSanpDiv = document.createElement("div");
  couponSanpDiv.setAttribute("class", "couponIndex_couponBlow")


  let couponBtn = document.createElement("button");
  couponBtn.setAttribute("class","couponIndex_couponBtn");
  couponBtn.innerText= "Get It Now";

  couponSanpDiv.append(couponBtn);

  couponBody.append(couponArea,couponSanpDiv)

  

  link.append(couponHead,couponBody)
  box.append(link);

  document.querySelector(".couponIndex_couponRow").append(box);  
    
  }



  




 