const form=document.querySelector("#student-form")
const nameInput=document.querySelector("#student-name")
const preview=document.querySelector("#preview")
const message=document.querySelector("#message")
const resetButton=document.querySelector("#reset-bin")

// the input event 
nameInput.addEventListener("input", function(){
    preview.textContent="You are typing: " + nameInput.ariaValueMax;
})
form.addEventListener("submit" ,function(event){
    event.preventDefault();
    message.textContent="Welcome " + nameInput.value

})

resetButton.addEventListener("click", function(){
    nameInput.value="";
    preview.textContent="Preview  will appear here....."
    message.textContent=" ";
})