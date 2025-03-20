import { useState } from "react";
import Button from "./button.jsx"
export default function FetchAPI() {

    
    const [sala, setSala] = useState('')

    const getJoke = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((data) => data.json())
        .then((finaldata) => setSala(finaldata.joke))
    }

    return(
        <div>
            <p>{sala}</p>
            <Button callApi = {getJoke}/>
        </div>
    )
}