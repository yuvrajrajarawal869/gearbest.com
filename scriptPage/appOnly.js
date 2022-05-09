console.log("hello appOnly");

function tiltePage() {
  let pageTitle = "App Exclusive Deals & Discounts Sale Online | Gearbest";
  window.document.title = pageTitle;
  console.log(pageTitle);
}

tiltePage();

function view() {
  let viewmore = document.querySelector(".viewMore");

  console.log("hi view ");
  viewmore.addEventListener("click", myexpandFun);

  function myexpandFun() {
    console.log("hi myexpandFun ");

    let width = document.querySelector(".components");

    console.log(width);

    if (width.style.height === "auto") {
      width.style.height = "2rem";
    } else {
      width.style.height = "auto";
    }
  }
}

view();



  let product= ProductData


  function disPlayProduct(productData) {

    productData.forEach(function (el,ind) {
      // let a =  document.createElement("a");
      // a.setAttribute("href", "cartpage.html");
  
      let card =document.createElement("div");
      card.className = "card";
  
      let img = document.createElement("img");
      img.setAttribute("src", el.imgUrl);
      img.className = "cardImg";
  
      let div1 = document.createElement("div");
      div1.className = "cardName";
      div1.innerText = el.itom_detail;
  
      let h3 =document.createElement("h3");
      h3.className = "cardDissPrise";
  
      h3.innerText = `$${el.Offer}`;
  
      let p1 = document.createElement("p");
  
      p1.innerText = `RRP:$${el.mrpPRice}`;
      p1.className = "orignalPrise";
  
      let couponBox = document.createElement("div");
      couponBox.className = "couponDiv";
  
      let sp1= document.createElement("span");
      sp1.className= "material-symbols-outlined"
      sp1.innerText="favorite";
      sp1.setAttribute("id","sp1");
     


      let sp2= document.createElement("span");
      sp2.className= "material-symbols-outlined";
    
      sp2.innerText="qr_code";
      sp2.setAttribute("id","sp2");

      sp2.addEventListener("click", function(){

        qrDisplay(el,ind)



      });

      couponBox.append(sp1,sp2);

      let qrdiv = document.createElement("div");
      qrdiv.className = "qrdiv";
      qrdiv.setAttribute("id",`qrdiv${ind}`);

      let qrimg = document.createElement("img");
      qrimg.className = 'qrimg';
      qrimg.setAttribute("src", "/gearbest/styelPage/download3.png");

            let qrpara = document.createElement("p");
      qrpara.className = 'qrpara';
      qrpara.innerText=`Gearbest App QR`;

      qrdiv.append(qrimg,qrpara);

     
      let a =  document.createElement("a");
      // a.setAttribute("href", "cartpage.html");

        a.addEventListener("click", function (){

          if(email === null ){
        alert("pls Sign IN");
        console.log(email);
        window.location.href=""
      }else{
        addToCart(el);       
      }
  
        }); 

        a.append(img,div1,h3,p1,)
  
          card.append( a ,couponBox ,qrdiv );
       
  
  
      document.querySelector(".container").append(card);
  
    });
  }
  
  disPlayProduct(product);
  


  let email = localStorage.getItem("email_show")


let bakendData= [];



function addToCart(obj){

  // console.log(obj);

  bakendData.push(obj);

  localStorage.setItem("bakendData",JSON.stringify(bakendData))

  window.localStorage.href="cartpage.html"

  // console.log("hi")

}

function qrDisplay(el,ind){

  // console.log(ind);

 let abc= document.getElementById(`qrdiv${ind}`).style.display="block" ;



 setTimeout(function(){
  window.location.reload();
 },2000)




 
// abc="";
 console.log(abc);


// if(  abc === "block" ){
// console.log("hi");
// //   abc= "none";
// }
// else{

//   abc = "block";
// }


}