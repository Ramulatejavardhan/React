const names = ["R", "Tej", "Ram"];
const ages=[19,20,21];

export default function Maps() {
    return (
        <>
            {names.map((name) => (
                <p key={name}>Hello {name}</p>
            ))}
            {ages.map((age) =>(
                <p>my age is {age}</p>
            ))}
        </>
    );
}