const nr=[1,2,3,4]
const nrs=nr.reduce(add);
console.log(nrs);
function add(ele,numb){
    return ele+numb;
}