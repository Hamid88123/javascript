function setError(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML= " ";
    }
}
function validateForm(){
    var returnval = true;
    clearErrors();
    // fullname validation
    var fullname=document.forms["myForm"]["fname"].value;
    
    if(fullname.length==0){
        setError("fullname","Please provide name");
        returnval=false;
    }
    else if(fullname.length>10){
        setError("fullname","Name is too long");
        returnval=false;
    }
    //email validation
    var email=document.forms["myForm"]["femail"].value;
    
    if(email.length==0){
        setError("email","Please provide email");
        returnval=false;
    }
    else if(email.length>20){
        setError("email","Email is too long");
        returnval=false;
    }
    //password validation
    var password=document.forms["myForm"]["fpassword"].value;
    
    if(password.length==0){
        setError("password","Please provide password");
        returnval=false;
    }
    else if(password.length!=8){
        setError("password","Password must be of 8 characters");
        returnval=false;
    }
     //confirm password validation
     var cpassword=document.forms["myForm"]["fconfirmpassword"].value;
    
     if(cpassword.length==0){
         setError("confirmpassword","Please provide confirm password");
         returnval=false;
     }
     else if(cpassword!=password){
         setError("confirmpassword","Password mismatch");
         returnval=false;
     }
     //profession validation
     var profession=document.forms["myForm"]["fprofession"].value;
     if(profession==0){
        setError("profession","Choose Profession");
        returnval=false;

     }
      //gender validation
      var gender=document.forms["myForm"]["fgender"].value;
     
      if(gender==''){
         setError("gender","Select gender");
         returnval=false;
 
      }
      //Language Validation
      var language=document.querySelectorAll('input[name="flanguage[]"]:checked');
      
      if(language.length==0){
        setError("language","Please chek any language");
        returnval=false;
      }
      
      // Reason validation
    var reason=document.forms["myForm"]["ftextarea"].value;
    
    if(reason.length==0){
        setError("reason","Please provide Reason");
        returnval=false;
    }
    else if(reason.length>500){
        setError("reason","Reason is too long");
        returnval=false;
    }
    return returnval;
   
    

    
}
