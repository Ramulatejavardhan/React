const add=(a,b)=>{
    return a+b;
}
document.getElementById("result").textContent=add(2,3)
const greet=document.getElementById("test");
const age = document.getElementById("age");
const button = document.getElementById("click");
const result = document.getElementById("eligible");
greet.textContent="hello r";
button.addEventListener("click",()=>{
const adult= age>=18 ? "ur are eligble":"ur no eligible"
result.textContent(adult)
