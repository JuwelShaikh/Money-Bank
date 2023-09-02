document.getElementById('btn-logIn').addEventListener('click', function(){
    console.log('btn clicked');

    const userField = document.getElementById('user-id');
    const email = userField.value;
    
    const passwordField = document.getElementById('pass=field');
    const pass = passwordField.value;
    

    if(email === 'juwel@gmail.com' && pass == '12345juwel'){
        alert('Submitted successful.');
    }
    else{
        alert('Wrong info.')
    }
})