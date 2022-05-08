

// var bakendData1=[
//     {
//         imgUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16505/goods_img-v1/43bdce029084.jpg",
//         itom_detail : "OUKITEL WP5 IP68 Waterproof Smartphone 8000mAh Android 10.0 Triple Camera Face/Fingerprint ID 5.5 inches 4GB 32GB Mobile Phones",
//         Offer : "199.99",
//         quntity : "1",
//         subTotal : "399.99",
//         color : "red",
//         size : "SizeAdd Free Gift",
//         shiping : "from"
//     },
//     {
//         imgUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16505/goods_img-v1/43bdce029084.jpg",
//         itom_detail : "OUKITEL WP5 IP68 Waterproof Smartphone 8000mAh Android 10.0 Triple Camera Face/Fingerprint ID 5.5 inches 4GB 32GB Mobile Phones",
//         Offer : "199.99",
//         quntity : "1",
//         subTotal : "399.99",
//         color : "red",
//         size : "SizeAdd Free Gift",
//         shiping : "from"
//     },



//     {
//         imgUrl: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16419/goods_thumb_220-v1/c33785c9c2de.jpg",
//         itom_detail: "Full HD 1080P Video Recorder Mini Camera Watch with Cameras IR Night Vision Motion Detection Wireless Micro Camcorder Action Cam",
//         Offer : "59.99",
//         quntity: "1",
//         mrpPRice: "$81.26",
//         subTotal: "299.99",
//         color: "red",
//         size: "SizeAdd Free Gift",
//         shiping: "from",
//         couponLeft: "100",
//         couponNumber: "Y81A5C7592512001",
//         Y81A5C7592512001:"100",
//         type: "consumerElectronics",
//       },

// ];


// document.querySelector(".deletitom").addEventListener("click",addtobackend)
 
// var email = "yuvraj@mail";

// function addtobackend(){
//     if(email != "Sign Up")
//     {
//         localStorage.setItem("bakendData",JSON.stringify(bakendData1));
//         window.location.reload();
//     }
//     else{
//         alert("plese login first")
//     }
    
// }




var total_sub  =[];

var total_priceData =[];
     

var  bakendData_of_card = JSON.parse(localStorage.getItem("bakendData"));

    mapData(bakendData_of_card);
    
    function mapData(bakendData_of_card){
    
    
      bakendData_of_card.forEach(function (elm,index){
      var tr = document.createElement("tr");
              
      var td1 = document.createElement("td");
      var img = document.createElement("img")
      var divs = document.createElement("div")
       
      var ptag1 = document.createElement("p")
      var ptag2 = document.createElement("p")
      var ptag3 = document.createElement("p")
      var ptag4 = document.createElement("p")

      ptag1.innerText=elm.itom_detail;
      ptag2.innerText="color"+" - "+elm.color;
      ptag3.innerText="size"+" - "+elm.size;
      ptag4.innerText="shiping"+" - "+elm.shiping;
      td1.setAttribute("class","ptag")
      ptag2.setAttribute("class","merge")
      ptag3.setAttribute("class","merge")
      ptag4.setAttribute("class","merge")

      td1.append(img);
      td1.append(divs);
      td1.append(ptag1);
      td1.append(ptag2);
      td1.append(ptag3);
      td1.append(ptag4);

      divs.append(ptag1,ptag2,ptag3,ptag4)
      img.setAttribute("src",elm.imgUrl)
      img.setAttribute("id","img_siz")

      var td2 = document.createElement("td");
      td2.innerText=elm.Offer;
       
      var td3 = document.createElement("td");
      td3.innerText=elm.quntity;

      var td4 = document.createElement("td");
      td4.innerText = elm.subTotal;
      td4.setAttribute("class","subtotal")


      var td5 = document.createElement("td")
        td5.innerText = "Delete";
        td5.style.color="red";
        td5.style.cursor="pointer";
        td5.setAttribute("class", "deleteText");
        td5.addEventListener("click", function () {
          deleteItem(elm, index);
        });



      tr.append(td1,td2,td3,td4,td5);
      document.querySelector("#body").append(tr); 
      
      total_priceData.push(elm.Offer);

      total_sub.push(elm.subTotal);

         
      });

      function deleteItem(elm, index) {
        bakendData_of_card.splice(index, 1);
        localStorage.setItem("bakendData", JSON.stringify(bakendData_of_card));
        window.location.reload();
    }
    
    }

      
    




    var sum1=0;

    for(var i=0; i<total_priceData.length; i++)
    {
        sum1=sum1+Number(total_priceData[i]);
    }

    
    
    var sum3=0;
    for(var i=0; i<total_sub.length;  i++)
    {
        sum3=sum3+Number(total_sub[i]);
    }
    document.querySelector(".totalPrice").innerText=sum3;
    document.querySelector(".offer").innerText=Number(sum3)-Number(sum1);

    document.querySelector(".paytotal").innerText=Number(sum3)-(Number(sum3)-Number(sum1));

     
    
    



 




