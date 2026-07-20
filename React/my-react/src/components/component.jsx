import React from "react";
import Childcompo1 from "./childcompo1";
function Component(){
    return (
        <div>
            <ol>
                <li>hello</li>
                <li>hi</li>
                <li>bye</li>
            </ol>
            <Childcompo1/>
        </div>
    );
}
export default Component;