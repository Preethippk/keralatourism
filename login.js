var user= document.querySelector('#user');
user.addEventListener('keyup',function(){
    var u_times =document.querySelector('u_times');
    var u_check =document.querySelector('u_check');
    if (user.value.length==0 || user.value.length<6){
        user.style.border = '1px solid red';
        u_times.style.display ='block';
        u_check.style.display = 'none';
        return false;
    }else{
        pass.style.border = '1px solid green';
        p_times.style.display = 'none';
        p_check.style.display ='block';
    }

})
function validation(){
    if (user.value ==0 || user.value.length<6){
        document.getElementById('error').innerHTML ='Please fill the required feilds!';
        return false;
    }else if (pass.value ==0 || pass.value.length<8){
        document.getElementById('error').innerHTML ='Please fill the required feilds!';
        return false;
    } else {
       alert("Successfully logged in");
    }

}