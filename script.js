function validate(){
    var username=document.form1.username.value;
    var email=document.form1.email.value;
    var password=document.form1.password.value;
    var cpassword=document.form1.cpassword.value;
    if(username==""){
        alert("enter username");
    }else if(email==""){
        alert("enter email");
    }else if(password==""){
        alert("enter password");
    }else if(cpassword==""){
        alert("enter cpassword");
    }else if(cpassword!=password){
        alert("password is not match");
    }
    else{
        alert("succesfully entered")
    }
} 
