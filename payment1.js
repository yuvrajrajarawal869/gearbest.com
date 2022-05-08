
// // var costomoredata=[
// //     {
// //         name : "yuvraj rajarawal",
// //         mobile_Nombur: "8698698804",
// //         Email : "yuvraj@gmail.com",
// //         address : "at wadi khu,bhokardan,jalna,maharastra,431114",
// //     },


// ];

let costomoredata = JSON.parse(localStorage.getItem("billing_address"));

document.querySelector(".ankertagOfBtn").addEventListener("click",billing_address);
function  billing_address(){
    
        localStorage.setItem("billing_address",JSON.stringify(costomoredata))

       }   

 
// var arrOfCupen = 
//      {
//         xtty : 200,
//         sytj : 100,
//         frt  : 50,
//         fdgdg: 10,
//         fhgdhfg :40,
//         gfhd: 100,
//     };


      
var generat_order = ["1234567890","1234567890","1234567890",
"1234567890","1234567890","1234567890","1234567890","1234567890",
"1234567890","1234567890","1234567890","1234567890","1234567890",
"1234567890","1234567890","1234567890",];
var x = (Math.random()*(16 - 0) +0);
   var y = x.toString();
var bag="";
for(var i=3; i<y.length; i++)
{
    bag=bag+y[i];     
}
localStorage.setItem("OrderNumber",bag);



    var atom_select = document.querySelector(".change_itom").addEventListener("click",massage)
     var cupenprice = localStorage.getItem("cupenValue");
     ApplyedCoupen=0;
        localStorage.setItem("ApplyedCoupen",ApplyedCoupen)
       let count=0;
      function  massage(){
          count++;
          localStorage.setItem("ApplyedCoupen",count);
      }

     var valuess = localStorage.getItem("ApplyedCoupen");
           
    
costomoredata.forEach(function (elm){
   document.querySelector("#Address> h3").innerText=elm.name;

    document.querySelector("#Address> h3+p").innerText=elm.mobile_Nombur +" | "+elm.Email;

    document.querySelector("#Address> h3+p+p").innerText=elm.address;     
});



  var copenvalues = document.querySelector("#apply").addEventListener("submit",validate); 
  function validate() {
      event.preventDefault()
    var cupen = document.querySelector(".apply").value;
       for(var key in arrOfCupen)
       {
           if(key==cupen)
           {
               localStorage.setItem("cupenValue",Number(arrOfCupen[key]));
           }
       } 
       window.location.reload();
  }
  





var total_priceData = [];
var total_QTY = [];
var total_sub = [];

    
var bakendData = JSON.parse(localStorage.getItem("bakendData"));
mapData(bakendData);
    function mapData(data){
    
    bakendData.forEach(function (elm){
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

      tr.append(td1,td2,td3,td4);
      document.querySelector("#body").append(tr);

      total_priceData.push(elm.Offer);

      total_QTY.push(elm.quntity); 

      total_sub.push(elm.subTotal);
         
      });
    
    

      var sum1=0;

    for(var i=0; i<total_priceData.length; i++)
    {
        sum1=sum1+Number(total_priceData[i]);
    }

    document.querySelector(".unitP").innerText=sum1;
    
    


      var sum2=0;
      for(var i=0; i<total_QTY.length; i++)
      {
          sum2=sum2+Number(total_QTY[i]);
      }
      document.querySelector(".QTY").innerText=sum2;
    
        
      
     
        var sum3=0;
      for(var i=0; i<total_sub.length;  i++)
      {
          sum3=sum3+Number(total_sub[i]);
      }
      document.querySelector(".Subt").innerText=sum3;

    


      var sub_total = document.querySelector("#grand-total .price p+p").innerText=Number(sum1)
      var total = document.querySelector(".shipping-charge p+p").innerText=sum2*40;
      var payAmunt = document.querySelector(".Earn_point h4").innerText= Number(sub_total)+Number(total)-Number(cupenprice);
      var dDiscount =Number(sum3)-Number(sum1);
      
        
      var amout_datail =[];

    document.querySelector(".ankertagOfBtn").addEventListener("click",totalpay);
    function totalpay(){
                var obj = {
                    Total_Amount : sum3,
                    Discount : dDiscount,
                    dilivery_charge : total,
                    Saving : dDiscount,
                    total_bill : payAmunt,
                    Atom_qty : sum2,
                  }  
                console.log(sum2);
                  
                  amout_datail.push(obj);
                  localStorage.setItem("amout_datail",JSON.stringify(amout_datail));
    }; 
     
} 
   
 




