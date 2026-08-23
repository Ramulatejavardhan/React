names=["R","Tej","Ram"];
export default function Maps(){
    return(
    <>
        {names.map((name) => (
            <p>{name}</p>
            ))}
    </>
);
}
