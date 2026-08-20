import React from "react";
import Image from "./img.jsx";
import Greet from "./greet.jsx"
import Greet1 from "./greet1.jsx";
import Greeting from "./greet1.jsx";
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
        <Greeting/>
        </>
    );
}
export default App;