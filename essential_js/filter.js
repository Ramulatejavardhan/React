const ev=[1,2,4,5,7,8,10];
const isiteven=ev.filter(iseven);
console.log(isiteven)

function iseven(num){
    return num%2==0;
}