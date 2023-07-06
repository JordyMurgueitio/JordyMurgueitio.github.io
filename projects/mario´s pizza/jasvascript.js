
function pasta(){ /* defino la funcion */
const collection = document.getElementsByClassName("box pizza"); 
for (let i = 0; i < collection.length; i++) { 
collection[i].classList.toggle("hide"); 
}   }

function pizza(){ /* defino la funcion */
const collection = document.getElementsByClassName("box pizza"); 
for (let i = 0; i < collection.length; i++) { 
collection[i].classList.toggle("hide"); 
}   }

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function message() {
    window.alert("Thanks! You'll receive a confirmation email in the next minutes");
}