import React from "react";
import Image from "./components/img.jsx";
import Greet from "./components/greet.jsx"
import Greeting from "./components/greeting.jsx";
import Rendering from "./components/rendering.jsx";
import Login from "./components/login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Map from "./components/map.jsx";
function App(){
    const login=true;
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
        <Rendering/>
        <h1>login page</h1>
        {login ? <Dashboard /> : <Login />}
        </>
    );
}
export default App;