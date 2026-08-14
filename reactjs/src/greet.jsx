export default function greet(props){
    return(
        <>
            <h1>hello{props.name}</h1>
            <h1>are u {props.age} yrs old</h1>
        </>
    );                
}