const names = ["R", "Tej", "Ram"];

export default function Maps() {
    return (
        <>
            {names.map((name) => (
                <p key={name}>Hello {name}</p>
            ))}
        </>
    );
}