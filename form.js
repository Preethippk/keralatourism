const form= document.getElementsByTagName('form')[0];
function validate(){
    var email=document.getElementById("email");
    var regexp= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (email.value.trim()===""){
        alert("EMPTY EMAIL");
        return false;
    }
    else if(!regexp.test(email.value)){
        alert("Invalid Email");
        return false;
    }
    else{
        return true;
    }
}
form.addEventListener('submit',
function(event){
    if(!validate()){
        e.preventDefault();
    }

});
// if (password.value.length <=6) {
//     messages.push('Password must be longer than 6 characters')
    
// }
// if (password.value.length >=20) {
//     messages.push('Password must be less than 20 characters')
    
// }
// if (password.value ==='password') {
//     messages.push('Password cannot be password')
    
// }
// if(messages.length>0){
//     e.preventDegfault()
//     errorElement.innerText=messages.join(', ')
// });

// var password=document.getElementById("password");
// if(password.value.trim === ""){
// setError(password,'Password cannot be blank');
 
//  }
    
// else{
//     setSucess(password);

//  }
//  var password2=document.getElementById("password2");
//  if(password2.value.trim === ""){
//       setError(password2,'Password cannot be blank');
//  }
// elseif(passwordValue !== password2Value){
//    setError(password2,'Password Does not match')
//     }
    
//     else{
//        setSucess(password);
//  }





    
    //   checkInputs();


const username= document.getElementById('username');
const password= document.getElementById('password');
const password2= document.getElementById('password2');
const Phone= document.getElementById('phone');
const email= document.getElementById('email');

 form.addEventListener('submit',(event) =>{
   event.preventDefault();
   validate();
})
 const validate () =>{
   const usernameVal = username.value.trim();
  const passwordVal= password.value.trim();
  const password2Val = password2.value.trim();
  const emailVal = email.value.trim();
 const PhoneVal= phone.value.trim();

 if(usernameVal === ''){
      setErrorMsg(username,'Username cannot be blank');
  } else if (username.length <2){
      setErrorMsg(username,'Username minimum 3 character');
  }else{
       setSucessMsg(username);
 }
 if( PhoneVal=== ''){
    setErrorMsg(Phone,'Phone cannot be blank');
} else if (PhoneVal.length !=10){
    setErrorMsg(Phone,'Not a valid phone number');
}else{
     setSucessMsg(phone);
}
// }
//     if(emailValue === ''){
//         setError(email,'email cannot be blank');
//     }
//     else if(!isEmail(emailValue))
//     {
//         setError(email,'Not a valid Email');
    
//     }
//     else{
//         setSucess(email);
//     }


// }

 if(passwordVal === ''){
   setErrorMsg(password,'Password cannot be blank');
}

else{
    setSucessMsg(password);
 }
 if(password2Val === ''){
 setErrorMsg(password2,'Password cannot be blank');
}
elseif(passwordValue !== password2Value){
  setErrorMsg(password2,'Password Does not match');
 }

 else{
    setSucessMsg(password);
}
}
function setErrorMsg(input, errormsgs){
const formcontrol = input.parentElement;
const small =  formcontrol.querySelector('small');
formcontrol.className = 'form-control error';
small.innerText = errormsgs;
}

// function isEmail(email){
//     return /^  return /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
