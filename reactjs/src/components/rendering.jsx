export default function Rendering(){
    {/* const age=17;
    if (age>=18){
        return <h1>Ur {age} yrs adult</h1>
    }
    return <h1>Ur still {age}yrs not an adult</h1>*/}
    const islogin=true;
    const admin=true;
    return(
    <h2>
        {admin && "hello"}
        <br></br>
        <br></br>
        {islogin ? "Welcome login successfull" :"Please login"} 
    </h2>
    );
}