const info = document.querySelector('.info');
const passwordInp = document.getElementById('password');
var password = ""



function generatePassword(){
    password = "";
    var len = 10;
    var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let n = charSet.length;

    for(var i = 0; i < len; i++){
        password += charSet.charAt(Math.floor(Math.random() * n));
    }
    passwordInp.value = password;
    
}


function copyPassword(){
    navigator.clipboard.writeText(password);
    info.style.opacity = "1";
    setTimeout(() => { info.style.opacity = "0"; }, 1500);
}