document.getElementById('btn-logIn').addEventListener('click', function(){
    console.log('btn clicked');

    const userField = document.getElementById('user-id');
    const email = userField.value;
    
    const passwordField = document.getElementById('pass=field');
    const pass = passwordField.value;
    

    if(email === 'juwel@gmail.com' && pass === 'juweldx'){
        window.location.href = 'homePage.html';
        alert('Welcome to the home page');
    }
    else{
        alert('Wrong info.');
    }
})