import { useState } from "react";



function FavoriteColor() {

    const [color,setColor] = useState("red");

    const updateColor = () => {
        setColor(previousState => {
            return { ...previousState, color: "blue" }
        });
    }
    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("Black")}
            >Black</button>
        </>)
}
export default FavoriteColor;