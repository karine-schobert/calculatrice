// calculatrice


const buttons=document.querySelectorAll(".btn");
const result = document.getElementById("result");

// permet de rappeller plusieurs meme bouton qui sont id 
buttons.forEach((button)=>{
button.addEventListener("click", (e) => {
     result.textContent += e.target.id;
 });
});

console.log(equal);
equal.addEventListener("click", () => {
    // utilise eval
    result.textContent= eval(result.textContent);
});
console.log(clear);
clear.addEventListener("click", ()=> {
    result.textContent="";
})
