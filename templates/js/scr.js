function validateLogin()                             
{            
    var email = document.getElementById("email");   
    var password = document.getElementById("password"); 
    
    if (email.value == "")                               
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter an email address';
        email.focus(); 
        return false; 
    } 

    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter an email address';
        email.focus(); 
        return false; 
    } 

    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter an email address';
        email.focus(); 
        return false; 
    } 

    if (password.value == "")                    
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter a valide password';
        password.focus(); 
        return false; 
    } 

    return true; 
}

function addUser_validation()                             
{            
    var first_name = document.getElementById("first_name");   
    var phone = document.getElementById("phone"); 
    var sign_email = document.getElementById("sign_email");   
    var passcode = document.getElementById("passcode");

    if (first_name.value == "")                               
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter valide name';
        first_name.focus(); 
        return false; 
    } 


    if (phone.value == "")                               
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter a valide phone number';
        phone.focus(); 
        return false; 
    } 
    if (phone.length < 10)                               
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter a valide phone number';
        phone.focus(); 
        return false; 
    }

    if (sign_email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter an email address';
        sign_email.focus(); 
        return false; 
    } 

    if (sign_email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter an email address';
        sign_email.focus(); 
        return false; 
    } 

    if (passcode.value == "")                    
    { 
        document.getElementById('alert-login').style.visibility='visible';
        document.getElementById('alert-login').innerHTML ='Please Enter a valide password';
        passcode.focus(); 
        return false; 
    } 

    return true; 
}
