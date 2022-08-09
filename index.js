function validation(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mobile").value
    let password = document.getElementById("password").value
    let confirm_password = document.getElementById("confirm_password").value

    if(name == ""){
        alert("Enter Your Name!!")
        return false
    }
    if(email == ""){
        alert("Enter Your Email!!")
        return false
    }
    if(mobile == ""){
        alert("Enter Your Mobile Number!!")
        return false
    }
    else if(mobile.length != 10){
        alert("Mobile must be 10 digits only!!")
        return false
    }
    if(password == ""){
        alert("Enter the Password!!")
        return false
    }
    else if(password.length < 6){
        alert("Password must be at least 6 letters long!!")
        return false
    }
    if(confirm_password != password){
        alert("Confirm Password and Password mismatched")
        return false
    }
}