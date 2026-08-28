import { useState } from "react";
export default function Usestate(){
    const[count,setcount] =useState(0);
    return(
        <>
            <h1>Count</h1>
            <button onClick={()=> setcount(count+1)}>➕</button>
        </>
    );
}