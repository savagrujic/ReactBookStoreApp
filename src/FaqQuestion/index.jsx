import { useState } from "react"
import data from "./data"
import "./design.css"

export default function Faq() {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    function handelSingleSelection(getId) {
        setSelected(getId === selected ? null: getId) 
    }

    function  handleMultipleSelection(getId) {
        let tempMultiple = [...multiple]
        const findIndexofId = tempMultiple.indexOf(getId)
        findIndexofId === -1 ? tempMultiple.push(getId) : tempMultiple.splice(findIndexofId,1)
        setMultiple(tempMultiple)
    }
    return<div className = "wrapper">
        <div className = "faq">
           {enableMultiSelection ?  <button onClick={() => {setEnableMultiSelection(!enableMultiSelection)
                setMultiple('')
                setSelected(null)
            }}>Disable Multi Selection</button> :
            <button onClick={() => {setEnableMultiSelection(!enableMultiSelection)
                setMultiple('')
                setSelected(null)
            }}>Enable Multi Selection</button>}
            {
                data.map(item => 
                    <div className = "item">
                        <div className = "title" onClick={
                            enableMultiSelection 
                            ? () => handleMultipleSelection(item.id)
                            : () => handelSingleSelection(item.id)
                        } > <h3>{item.question}</h3>

                        {selected === item.id ? <span>-</span>: <span>+ </span>}
                    </div>
                    {
                        enableMultiSelection
                        ? multiple.indexOf(item.id) !== -1 && (<div className="odgovor"> {item.answer}</div>)
                        : selected === item.id && (<div className="odgovor"> {item.answer}</div>)
                    }
                    </div>
                )
            }
             </div>
    </div>
}