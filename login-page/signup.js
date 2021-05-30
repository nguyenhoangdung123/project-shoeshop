function signin() {
    window.location.href = "login.html"
}
async function register(username, password){
    const response = await fetch("https://60ae432c80a61f0017332d68.mockapi.io/api/v1/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
        });
        const data = await response.json();
        signin();
        console.log(data);
}
let button = document.getElementById("button1");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
button.addEventListener('click', function() {
    const username = input1.value;
    const password = input2.value;
    const confirmpassword = input3.value;
    if(password === confirmpassword){
        register(username, password);
    }
    else{
        alert("INCORRECT PASSWORD")
    }
})