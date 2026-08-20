import React from "react";
import Image from "./img.jsx";
import Greet from "./greet.jsx"
import Greeting from "./greeting.jsx";
function App(){
    return(
        <>
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