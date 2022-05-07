document.querySelector("#form").addEventListener("submit", registerfunction);

var capcha = ["Y83X", "QAeH", "2EZh"]
var x = Math.floor(Math.random() * (3 - 0) + 0);
//console.log(x)
var y = capcha[x]

document.getElementById("cap").textContent = y;

var registerdataArray = JSON.parse(localStorage.getItem("registerData")) || [];

function registerfunction(){
    event.preventDefault();

    var data = {
        email : form.email.value,
        cpassword : form.cPassword.value,
        repassword : form.rePassword.value,
        capcha : form.capcha.value,
    }
    matchPassword(data, y);
    
        function matchPassword(data, y) {  
            //console.log(data.cpassword, data.repassword)
            var pw1 = data.cpassword;  
            var pw2 = data.repassword; 
            var capcha1 = data.capcha;
            var capcha2 = y; 
            if(pw1 != pw2)  
            {   
              alert("Password does not match");  
            } 
            else if(capcha1!=capcha2)
            {  
              alert("Capcha does not match")
            }
            else{
                alert("Register successfully");  
                registerdataArray.push(data);
                localStorage.setItem("registerData", JSON.stringify(registerdataArray))
            }

        }
        //console.log(registerdataArray)
             
    window.location.href = "signin.html";
    
}

