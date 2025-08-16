function database()
 {
    return {
        username: "anupom",
        password: "anupom"  
    };
}


function handleRegister(event) 
{
    event.preventDefault(); 

    
    let enteredUser = prompt("Enter your username:");
    let enteredPass = prompt("Enter your password:");

   
    let credentials = database();

 
    if (enteredUser === credentials.username && enteredPass === credentials.password) {
        alert("Registration Confirmed ");
    } else {
        alert("Wrong password ");
    }
}


window.onload = function () 
{
    const form = document.querySelector("form");
    form.addEventListener("submit", handleRegister);
};