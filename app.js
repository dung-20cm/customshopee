var btn_register = document.getElementsByClassName('btn_register');
var btn_login = document.getElementsByClassName('btn_login');
var modal=document.getElementsByClassName('modal');
var auth_form_register = document.getElementById('auth-form-register');
var auth_form_login = document.getElementById('auth-form-login');
var btn_close = document.getElementsByClassName('btn-close');

for (var i=0; i<btn_register.length; i++) {
    btn_register[i].onclick=function(){
        modal[0].style.display="flex";
        auth_form_register.style.display="block";
        auth_form_login.style.display="none";
    }
}

for (var i=0; i<btn_login.length; i++) {
    btn_login[i].onclick=function(){
        modal[0].style.display="flex";
        auth_form_login.style.display="block";
        auth_form_register.style.display="none";
    }
}

for(var i=0;i<btn_close.length;i++){
    btn_close[i].onclick=function(){   
        modal[0].style.display="none";
    }
}

                          