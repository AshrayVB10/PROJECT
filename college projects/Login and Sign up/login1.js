// const togglePassword = button =>{
//     button.classList.toggle("showing")
//     const input = document.getElementById("password")
//     input.type = input.type === "password" 
//         ? "text"
//         : "password"
// }
// login button script
let user = {
    name : "Ashray",
    age : 18,
}
function sayHi(){
    alert ("Hello!")
}
document.getElementById("demo").innerHTML = "Hi" + user.name
document.getElementById("control").onclick = user.message;