import React from "react";
import hanuman from "./hanuman.jpg";
function Greet(){
    return(
        <>
        <h1>hello</h1>
        <a href="https://www.google.com/search?q=hanuman+pics&oq=hanuman+pics&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDMwNzZqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8&sei=ZNt6asOAGrmYseMP34T2gAo">
        <img src={hanuman} alt="hanumanji pic" width="250px" height="auto"/>
        </a>
        {/*without public folder we have to import the image first and we have to use in src={hanuman}*/}
        <img src="/hanuman1.jpg" alt="hanumanji1"/>
        {/* we can access the image by giving that image to public folder without importing the image. */}
        </>
    );
}
export default function infos(){
    return(
        <>
        <Greet/>
        </>
    );
}