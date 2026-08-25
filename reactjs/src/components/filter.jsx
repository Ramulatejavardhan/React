const students=[
        { id:1,name:"Jai",age:20},
        { id:2,name:"Sree",age:21},
        { id:3,name:"Ram",age:21}
]
    const adult=students.filter(
        (student) =>student.age>20
);
export default function Filter(){
    return <h4>{adult}</h4>
}