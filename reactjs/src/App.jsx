import React from "react";
import Image from "./components/img.jsx";
import Greet from "./components/greet.jsx"
import Greeting from "./components/greeting.jsx";
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