import hanuman from "./hanuman.jpg"
function Image(){
    const name="tej"
    return(
        <>
        <h1>JAI SREE RAM🙏</h1>
        <img src={hanuman} alt="hanumanjipic" width="250px"/>
        {/*without public folder we have to import the image first and we have to use in src={hanuman}*/}
        <br/>
        <img src="hanuman1.jpg" alt="hanumanji" width="220px"/>
        {/* we can access the image by giving that image to public folder without importing the image. */}
        <h1>Hello{name}</h1>
        <h1>Hello{name}</h1>
        </>
    );
}
export default Image;