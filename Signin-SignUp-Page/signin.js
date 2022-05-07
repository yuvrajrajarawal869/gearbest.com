
var registerdataArray = JSON.parse(localStorage.getItem("registerData"));
//console.log(registerdataArray)


document.querySelector("#form").addEventListener("submit", signinfunction)

function signinfunction(){

    var email1 = document.querySelector("#email").value;
    var password1 = document.querySelector("#password").value;
    
     event.preventDefault()
     var count=0;
     registerdataArray.forEach(function (ele){
       if(email1 == ele.email && password1==ele.cpassword)
       {
        alert("Sign in successfully");
        localStorage.setItem("signindata", JSON.stringify(email1))
         document.querySelector("#email").value="";
         document.querySelector("#password").value="";
       }
       else{
         count++;
           if(count==registerdataArray.length)
           alert("Email or Password does not match")
           document.querySelector("#email").value="";
           document.querySelector("#password").value="";
        }
    });

    //window.location.href = "product.html";

  }



            
    
            
            
