import { useState } from "react"

import "./style.css"

export default function ColorApp() {


    const [typecolor, setTypecolor] =  useState("hex")
    const [color, setColor] = useState('#005000')
    const [rgb, SetRgb] = useState({
        r: 0,
        g: 0,
        b: 0
    })


    function randomNumber(n) {
        return Math.floor(Math.random() * n)
    }

    function HandleHexColor() {

        let hex = [1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexcolor = '#'

        for (let i = 0; i< 6; i++) {
            hexcolor += hex[randomNumber(hex.length)]
        }

        setColor(hexcolor)
    }
    function HandleRgbColor() {
        SetRgb({
        r : Math.floor(Math.random() * 256),
        g : Math.floor(Math.random() * 256),
        b : Math.floor(Math.random() * 256)
        })
    }
    return(

        <div className="out">
      
        <div className="wrapper" style={
        {
            width: "100vw",
            height: "100vh",
            
            backgroundColor: typecolor ==="hex" ? color: `rgb(${rgb.r},${rgb.g},${rgb.b} )`
            

        }
        }>
            <div>
            <button onClick={() =>
                typecolor==="hex" ? HandleHexColor() : HandleRgbColor()
            }>Generate Random Color</button>
            <button onClick={() => setTypecolor('rgb')}>Generate Random RGB</button>
            <button onClick={() => setTypecolor('hex')}>Generate Random HEX</button>
            </div>
        {
            typecolor === "hex" ? <h1>Hex color is: {color}</h1> : <h1>Rgb color is: {rgb.r}, {rgb.g}, {rgb.b}</h1>
        }
        </div>
        </div>
        
    )
}