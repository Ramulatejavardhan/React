const add=(a,b)=>{
    return a+b;
}
document.getElementById("val").textContent=add(2,3)
const age = document.getElementById("age");
const button = document.getElementById("click");
const result = document.getElementById("result");
button.addEventListener("click",()=>{
const adult= age.value>=18 ?"ur are eligble":"ur not eligible"
result.textContent=adult;
});
