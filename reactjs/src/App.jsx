import React from "react";
import Image from "./img.jsx";
import Greet from "./greet.jsx"
function App(){
    return(
        <>
        <Image/>
        {/* <Greet
            name="tej"
            age={30}
        /> */}
        <Greet
            name="tej"
            age={30}
            place="hyd"
        />
        </>
    );
}
export default App;