import { useState } from "react"
import "./design.css"

export default function () {

    const [pass, setPass] = useState('')
    const [value, setValue] = useState(0)
    const [hiddenpass, setHiddenpas] = useState()
    const [show, setShow] = useState(false)
    const [copy, setCopy] = useState(false)
    function GeneratePass() {
        let numbers = '0123456789'
        let lowerChar = 'abcdefhijklmnopqrstuwxyz'
        let highChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let specChar = '!£$%^&*()_+?><'
        let all = numbers + lowerChar + highChar + specChar
        let passlenght = 10
        let temppass = ''
        for (let i = 0; i < value; i++) {
            temppass += all[Math.floor(Math.random() * all.length)]
        }
        setPass(temppass)
        setHiddenpas("*".repeat(temppass.length))
        setCopy(false)
        console.log(pass.length)
        console.log(temppass)
    }

    return (
        <div className="wrapper">
            <div className="container">
                <input onChange={(e) => setValue(e.target.value)}></input>
                <h1>Password Generator</h1>
                <div className="pass">
                    {show ? <p>{pass}</p> : <p>{hiddenpass}</p>}
                    <p className="show" onMouseDown={() => setShow(true)} onMouseUp={() => setShow(false)} onMouseLeave={() => setShow(false)}>Show</p>
                </div>
                <div className="buttonWrapper">
                    <button onClick={() => GeneratePass()}>Generate</button>
                    <button onClick={() => {
                        navigator.clipboard.writeText(pass)
                        if (pass.length != 0)
                            setCopy(true)
                    }}>Copy to Clipboard</button>
                </div>
                {copy ? <p style={{ color: 'green' }}>Ssuccessfully coppied to clipboard!</p> : ''}
            </div>
        </div>
    )
}