// export default function greet(props){
//     return(
//         <>
//             <h1>hello{props.name}</h1>
//             <h1>are u {props.age} yrs old</h1>
//         </>
//     );                
// }

const Greet=({name,age,place}) =>{
    return(
        <>
        <h1>hello {name}</h1> 
        {/*we can access the props from the app.jsx file.*/}
        <h1>are u {age} yrs old</h1>
        <h1>are u from {place}</h1>
        const nam="teja"
        <h2>hello {nam}</h2>
        </>
    );
}
export default Greet;