console.log("hello coupon");

function tiltePage() {
  let pageTitle = "Gearbest Coupon Center: Free Category & Product Coupons";
  window.document.title = pageTitle;
  // console.log(pageTitle);
}

tiltePage();

let check = CouponData[0];
// console.log(check);

// coupon function data itrote

for (let i = 0; i < check.length; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "couponIndex_couponCell");

  let link = document.createElement("a");
  link.setAttribute("href", "couponCenter.html");
  link.setAttribute("target", "_blank");
  link.setAttribute("class", "couponIndex_couponLink");

  let couponHead = document.createElement("div");
  couponHead.setAttribute("class", "couponIndex_couponHead");
  let h4 = document.createElement("h4");
  h4.innerText = check[i].valueCost;

  let p = document.createElement("p");
  p.innerText = check[i].valueOff;

  couponHead.append(h4, p);

  let couponBody = document.createElement("div");
  couponBody.setAttribute("class", "couponIndex_couponBody");

  let couponArea = document.createElement("div");
  couponArea.setAttribute("class", "couponIndex_couponArea");

  let couponSanpDiv = document.createElement("div");
  couponSanpDiv.setAttribute("class", "couponIndex_couponBlow");

  let couponBtn = document.createElement("button");
  couponBtn.setAttribute("class", "couponIndex_couponBtn");
  couponBtn.innerText = "Get It Now";

  couponSanpDiv.append(couponBtn);

  couponBody.append(couponArea, couponSanpDiv);

  link.append(couponHead, couponBody);
  box.append(link);

  document.querySelector(".couponIndex_couponRow").append(box);
}

let RightNavBar = document.querySelector(".RightNavBar");
let LeftNavBar = document.querySelector(".LeftNavBar");
console.log(RightNavBar, LeftNavBar);

RightNavBar.addEventListener("click", navShiftRight);
LeftNavBar.addEventListener("click", navShiftLeft);

function navShiftRight() {}

function navShiftLeft() {}

let navNames = document.querySelectorAll(".couponIndex_navBoxsName div p");

let productData = ProductData;

console.log(productData);

navNames.forEach(function (el) {
  console.log(el);

  el.addEventListener("click", function () {
    showByNavFilter(el);
  });
});

function showByNavFilter(el) {
  console.log(el.innerText);
}

function disPlayProduct(productData) {

  productData.forEach(function (el) {
    // let a =  document.createElement("a");
    // a.setAttribute("href", "cartpage.html");

    let card =document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.setAttribute("src", el.imgUrl);
    img.className = "cardImg";

    let h4 = document.createElement("h4");
    h4.className = "cardName";
    h4.innerText = el.itom_detail;

    let h3 =document.createElement("h3");
    h3.className = "cardDissPrise";

    h3.innerText = el.Offer;

    let p1 = document.createElement("p");

    p1.innerText = `RRP:$${el.mrpPRice}`;
    p1.className = "orignalPrise";

    let couponBox = document.createElement("div");
    couponBox.className = "couponDiv";

    let p2 = document.createElement("p");

    p2.innerText = `Coupon Left:${el.couponLeft}`;
    p2.className = "couponLeft";

    let p3 = document.createElement("p");
    p3.innerText = `${el.couponNumber}`;
    p3.className = "couponLeft";

    couponBox.append(p2,p3);

   

   
    let a =  document.createElement("button");
    // a.setAttribute("href", "cartpage.html");

      a.innerText="add cart"; 

      a.className= "addToCart"
      a.addEventListener("click", function (){


      if(email === null ){
        alert("pls Sign IN");
        console.log(email);
        window.location.href=""
      }else{
        addToCart(el);       
      }

      });


        card.append(img,h4,h3,p1,couponBox, a)


    document.querySelector(".productDisplay").append(card);

  });
}

disPlayProduct(productData);


let email = localStorage.getItem("email_show")


let bakendData= [];



function addToCart(obj){

  // console.log(obj);

  bakendData.push(obj);

  localStorage.setItem("bakendData",JSON.stringify(bakendData))

  window.localStorage.href="cartpage.html"

  // console.log("hi")

}


// let email = null;
