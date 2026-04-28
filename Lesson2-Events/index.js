const form=document.querySelector("#student-form")
const nameInput=document.querySelector("#student-name")
const preview=document.querySelector("#preview")
const message=document.querySelector("#message")
const resetButton=document.querySelector("#reset-bin")

// the input event 
nameInput.addEventListener("input", function(){
    preview.textContent="You are typing: " + nameInput.ariaValueMax;
})
form.addEventListener("submit",function(event){
    event.preventDefault();
   const studentName=nameInput.value;
    fetch ("https://jsonplaceholder.typicode.com/users/2") 
   .then(function(response){
    return response.json();
    })
    then(function(data){
        message.textContent=
        "Welcome" + studentName + "API user:" + data.name + "Email: " + data.email + 
        "Phone Number :"+ data.phone + "Company" + data.company.name
    console.log(data)
})
})

resetButton.addEventListener("click", function(){
    nameInput.value="";
    preview.textContent="Preview  will appear here....."
    message.textContent=" ";
})

fetch ("https://jsonplaceholder.typicode.com/users/1") 
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})