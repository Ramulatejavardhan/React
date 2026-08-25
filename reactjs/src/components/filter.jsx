const students=[
    {id:1,name:"Jai",age:19},
    {id:2,name:"Sree",age:20},
    {id:3,name:"Ram",age:21}
]
const adults=students.filter(
    (student) => student.age>19
);
export default function Filter(){
    return(
        <>
            {adults.map((adult) =>(
            <div key={adult.id}>
                <h4>This are the adult persons details</h4>
                <ul>{adult.name}</ul>
                <ul>{adult.age}</ul>
            </div>
            ))}
        </>
);
}