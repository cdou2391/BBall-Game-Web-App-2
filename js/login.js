
    //var username=document.getElementById('emailinput').textContent;
    //var password=document.getElementById('passwordinput').textContent;

function login(form){
    
    var username = form.email.value;
    var password = form.pass.value;

    console.log("You typed: " + username + password);
}


//document.querySelector('.login100-form-btn').addEventListener('click', login);