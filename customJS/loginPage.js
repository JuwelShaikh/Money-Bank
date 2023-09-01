document.getElementById('btn-logIn').addEventListener('click', function(){
    console.log('btn clicked');

    const userField = document.getElementById('user-id');
    const email = userField.value;
    console.log(email);
})