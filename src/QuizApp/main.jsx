import { useState } from "react"
import data from "./data.js"
import "./design.css"

export default function Main() {

    const [question, setQuestion] = useState(0)
    const [tacniodgovori, setTacniOdgovori] = useState(0)
    const [omasio, setOmasio] = useState(false)

    function handleOdgovor(id) {

        if (data[question].odgovori[id].tacan) {
            setQuestion(question + 1)
            if (!omasio) {
                setTacniOdgovori(tacniodgovori + 1)
            }
            setOmasio(false)


        } else {
            setOmasio(true)
            // alert('Omasio si pitanje!')
            // setQuestion(question + 1)
        }




    }


    function RenderPitanja() {

        return <div>
            <p>{question}/{data.length}</p>
            {<p>{data[question].pitanje}</p>}
            {data[question].odgovori.map((odgovor, id) => (
                <div className="odgovori">
                    <div onClick={() => { handleOdgovor(id) }} id={id} style={
                        {
                            color: omasio
                                ? (data[question].odgovori[id].tacan ? "green" : "red   ") : ""
                        }
                    }>{odgovor.tekst}</div>
                </div>
            ))}
        </div>
    }


    return (
        <div className="wrapper">
            <div >
                {question < data.length ? <RenderPitanja /> : <p><span>{tacniodgovori}</span>/{data.length} tacnih odgovora!</p>}
            </div>
        </div>
    )


}
