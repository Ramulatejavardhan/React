import React from "react";
import Image from "./img.jsx";
import Greet from "./greet.jsx"
import Greet1 from "./greeting.jsx";
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
        <Greet1/>
        </>
    );
}
export default App;