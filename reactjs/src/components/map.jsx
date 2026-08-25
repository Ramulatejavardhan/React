const names = ["Jai", "Sri", "Ram"];
const ages=[19,20,21];

export default function Maps() {
    return (
        <>
            {/* {names.map((name) => (
                <p key={name}>Hello {name}</p>
            ))}
            {ages.map((age) =>(
                <p key={age}>my age is {age}</p>
            ))} */}
            {names.map((name,index) =>(
                <>
                <h4 key={name}>Hi {name}</h4>
                <h4 key={ages}>Are U {ages[index]} yrs old</h4>
                </>
            ))}
        </>
    );
}