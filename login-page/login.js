async function login(username, password){
    const response = await fetch("https://60ae432c80a61f0017332d68.mockapi.io/api/v1/users");
    const data = await response.json();
    let foundUser;
    for(let user of data){
        if(user.username === username && user.password === password ){
            localStorage.setItem('currentUser', JSON.stringify(user));
            foundUser = user;
            window.location.href = "signup.html";
        }
    }
    if(!foundUser){
        alert("WRONG USERNAME OR PASSWORD")
    }
}   
const logout = async () => {
    localStorage.removeItem('currentUser');
    location.reload();
}
function signup() {
    window.location.href = "signup.html"
}
let button = document.getElementById("button1");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
button.addEventListener('click', function(){
    const username = input1.value;
    const password = input2.value;
    login(username, password);
})
