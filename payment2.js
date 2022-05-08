

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

var OTP="";

for(var i=0; i<4; i++)
{
  OTP=OTP+bag[i];
}
console.log(OTP);




// var billing_Add=[{
//    name : "yuvraj rajarawal",
//    mobile_Nombur : 8698698804,
//    Email :  "Yuvraj@gmail",
//    address : "at wadi khu tail bhokardan diat jalna 431114",
// },];

localStorage.setItem("billing_address",JSON.stringify(billing_Add))


var billing_data = JSON.parse(localStorage.getItem("billing_address"));

billing_data.forEach( function(elm){

    var nam = document.querySelector("#addresFromCahrt h4");
     nam.innerText = elm.name;

     var  mob = document.querySelector("#addresFromCahrt h4+p")
     mob.innerText = elm.mobile_Nombur;

     var emladd = document.querySelector("#addresFromCahrt h4+p+p")
     emladd.innerText = elm.Email;

     var add = document.querySelector("#addresFromCahrt h4+p+p+p")
     add.innerText = elm.address;

     var shipingadd = document.querySelector(".shipingdd");
      
     shipingadd.innerText=elm.address;

});



var card_details = document.querySelector(".btn-pay-Now")
    card_details.addEventListener("click",Storage_card_ditails)
  var CardDetails = [];


function Storage_card_ditails(){
    event.preventDefault()
    var dataOfObj={
    Card_Number : document.querySelector(".card_Number").value,
    month : document.querySelector("#month").value,
    year : document.querySelector("#year").value,
    sequrity_code : document.querySelector(".cvv").value,
    Card_Holder_Name :document.querySelector(".carr_HN").value
    };
    CardDetails.push(dataOfObj)
    localStorage.setItem("CardData",JSON.stringify(CardDetails))
    // window.location.href = "payment3.html";
  };

  

    var sub = document.querySelector(".ratio_input").addEventListener("click", showbox)

    
    function showbox(sub){
      
        document.getElementById('id01').style.display ="block";   
        
    };


    var orderNumber = localStorage.getItem("OrderNumber");
    var append_To_Order = document.querySelector(".add_orderNumber");
    append_To_Order.innerText=orderNumber;
      
    document.querySelector(".btn-pay-Now").addEventListener("click",paynow)
    function paynow(){
         localStorage.setItem("orderConform",orderNumber);
    };
    
    
     var payAmunt = JSON.parse(localStorage.getItem("amout_datail"));
     
     payAmunt.forEach(function(elm){
      document.querySelector(".pay_total_amount").innerText=elm.total_bill;
      document.querySelector(".pay_total_amount_grand").innerText=elm.total_bill;
     })
    


var creditCardDetailes = [
  {
    card_Number : 455683992232,
    month_of_exp : 7,
    year_Of_expiry : 2034,
    cvv : 110,
    Card_holder_Name : "yuvraj",
  },

  {
    card_Number : 455683995466,
    month_of_exp : 6,    
    year_Of_expiry : 2037,   
    cvv : 110,
    Card_holder_Name : "yuvraj",
  },
  {
    card_Number : 455683990088,
    month_of_exp : 4,
    year_Of_expiry : 2032,
    cvv : 110,
    Card_holder_Name : "yuvraj",
  }
];





console.log(document.querySelector("#year").value);

   document.querySelector(".btn-pay-Now").addEventListener("click",cheakdetail)
  
   function cheakdetail(){
    var card_N = document.querySelector(".card_Number").value;
    var months = document.querySelector("#month").value;
    var years = document.querySelector("#year").value;
    
    console.log(document.querySelector("#year").value);
    var cvv = document.querySelector(".cvv").value;
    var carr_HN = document.querySelector(".carr_HN").value;
     event.preventDefault()
     var count=0;
     creditCardDetailes.forEach(function (elm){
        
       if(card_N == elm.card_Number &&  cvv==elm.cvv && carr_HN==elm.Card_holder_Name){
         alert("OTP is"+" "+OTP);
         document.querySelector(".card_Number").value="";
         document.querySelector(".cvv").value="";
        document.querySelector(".carr_HN").value="";
        localStorage.setItem("OTP",OTP)
        window.location.href="payment3.html"
       }

       else{
         count++;
           if(count==3)
           alert("credendials is wrong")
         document.querySelector(".card_Number").value="";
         document.querySelector(".cvv").value="";
        document.querySelector(".carr_HN").value="";
        } 
  
    })


  }
  
