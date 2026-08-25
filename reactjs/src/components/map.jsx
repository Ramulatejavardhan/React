const names = ["R", "Tej", "Ram"];
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
                <p>HI {name}</p>
                <p>HI {ages[index]}</p>
                </>
            ))}
        </>
    );
}