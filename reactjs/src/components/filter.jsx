const students=[
    {id:1,name:"Jai",age:19},
    {id:2,name:"Sree",age:20},
    {id:3,name:"Ram",age:19}
]
const adults=students.filter(
    (student) => student.age>19
);
export default function Filter(){
    return(
        {adults.map((adult) =>(
        <div key={adult.id}>
            <p>This are the adult persons names</p>
            <h4>{adult.name}</h4>
        </div>
    ))}
    );
}