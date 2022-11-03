


 var mach = localStorage.getItem("OTP");
 var otp = document.querySelector(".otp");
 var fff = document.querySelector(".form_mach");


 
var billing_detai = JSON.parse(localStorage.getItem("amout_datail"));
var orderConform = localStorage.getItem("orderConform");
var billing_address=JSON.parse(localStorage.getItem("addressStore"));
var bakendData = JSON.parse(localStorage.getItem("bakendData"));
var payAmunt = localStorage.getItem("payAmunt");


// document.querySelector(".form_mach")

document.querySelector("form").addEventListener("submit",OTPcheaking)

  function   OTPcheaking(){
        event.preventDefault();
        var model = document.querySelector(".Satment");
        var Invoice = document.querySelector(".Invoice");
        var order = document.querySelector(".ON");
        var order_number = document.querySelector(".or");
        var billing_data = document.querySelector(".date")
        var Total_Amount = document.querySelector(".tP");
        var Discount = document.querySelector(".d");
        var dilivery_charge = document.querySelector(".dilivery_charge")
        var Saving = document.querySelector(".s");
        var total_bill = document.querySelector(".tb");
        var shipping_add = document.querySelector(".sd");
        var C_name= document.querySelector(".C_name");
        var C_mobile_Num = document.querySelector(".C_mobile_Num");
        var C_add = document.querySelector(".C_add");
        var Atom_discription = document.querySelector(".ad");
        var Atom_name = document.querySelector(".an");
        var Atom_qty = document.querySelector(".Aqty");
       

        if(otp.value==mach)
        {   
            
            alert("payment successful of"  + "  "+ payAmunt)
            model.style.display ="block";   
            var Succ = document.createElement("h3");
            Succ.setAttribute("class","remark")
            Succ.innerText="Payment Successfully";
            document.querySelector(".form_mach").innerHTML="";
            fff.append(Succ);

            Invoice.innerText="Invoice"; 
            order.innerText="Order";

            order_number.innerText=orderConform;
            // billing_date.innerText= "billing date"+"     "+"01-05-2022";
            
        
        billing_detai.forEach( function (elm) {
            Total_Amount.innerText="Total Amount"+ ":-"+elm.Total_Amount;
            Discount.innerText = "Discount"+":-"+elm.Discount; 
            Saving.innerText = "Saving" +":-"+elm.Saving;
            dilivery_charge.innerText="dilivery charge"+ ":-" +elm.dilivery_charge;
            total_bill.innerText="total_bill"+":-"+elm.total_bill;
            Atom_qty.innerText="Item qty"+":-"+elm.Atom_qty;
        });

        billing_address.forEach(function (elm){
            shipping_add.innerText="shipping Address";
            C_name.innerText="Name"+":-"+elm.name;
            C_mobile_Num.innerText="Mobile"+":-"+ elm.mobile_Nombur;
            C_add.innerText="Address"+":-"+elm.address;
        });

        bakendData.forEach(function (elm){
           
            Atom_discription.innerText="Item discription";
            Atom_name.innerText="Item name"+":-"+elm.itom_detail;

        });
        
        }

        else{
            alert("wrong OTP");
        }
  };
 



 
