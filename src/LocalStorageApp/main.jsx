import { useEffect, useState } from "react"
import "./design.css"
export default function Biblioteka() {
    
    const [knjiga, setKnjiga] = useState({
        title: '',
        autor: '',
        publisher: '',
        location: ''
    })
    const [nizKnjga, setNizknjiga] = useState([])
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(null)

    useEffect(() => {
        const storeddata = localStorage.getItem('database')

        if(storeddata)
            setNizknjiga(JSON.parse(storeddata))
    }, [])


    function ResetInput() {
        setKnjiga({
            title: '',
        autor: '',
        publisher: '',
        location: ''
        }
        )
    }

    function HandleChange(e) {
        const {name,value} = e.target
        setKnjiga({
            ...knjiga,
            [name]:value
        }
       
        )
        
    }
    function AddBook(e) {
        e.preventDefault()
        const nizknjigatemp = [...nizKnjga, knjiga]
        setNizknjiga(nizknjigatemp)
        localStorage.setItem('database', JSON.stringify(nizknjigatemp))
        ResetInput()

      
    }

    function HadndleEdit(id) {
        setEdit(true)
        setKnjiga(nizKnjga[id])
        setId(id)
        


        
        console.log(id)
    }

    function HandleEditSubmit(e) {
        e.preventDefault()
        let tempNiz = [...nizKnjga]
        tempNiz[id] = knjiga
        setNizknjiga(tempNiz)
        localStorage.setItem('database', JSON.stringify(tempNiz))
        setEdit(false)
        ResetInput()
    }

    function Delete(id) {
      //  console.log(id)
        setNizknjiga(nizKnjga.filter((item,itemid) => itemid !== id))
        const temparr = nizKnjga.filter((item,itemid) => itemid !== id)
        localStorage.setItem('database', JSON.stringify(temparr))
    }


    return(<div className="wrapper2">
    <div className="container">
       <form onSubmit={edit ? HandleEditSubmit: AddBook}>
        <input value={knjiga.title} placeholder="Naslov" name="title" onChange={(e) => HandleChange(e)} required></input>
        <input value={knjiga.autor} placeholder="Autor" name="autor" onChange={(e) => HandleChange(e) } required ></input>
        <input value={knjiga.publisher} placeholder="Izdavac" name="publisher" onChange={(e) => HandleChange(e)} required></input>
        <input value={knjiga.location} placeholder="Lokacija" name="location" onChange={(e) => HandleChange(e)} required></input>
        {edit ? <button>Potvrdi Izmene</button>: <button>Dodaj Knjigu</button>}
       </form>


        <div>
        {nizKnjga.length === 0 ? <div>Trenutno nema unetih knjiga</div>:     
        nizKnjga.map((item,id) => (
            <div className="wrapper">
            <section>
            <p>Naslov: {item.title}</p>
            </section>
            <section>
            <p>Autor: {item.autor}</p>
            </section>
            <section>
            <p>Izdavac: {item.publisher}</p>
            </section>
            <section>
            <p>Lokacija na Polici: {item.location}</p>
            </section>
            
            <button className = 'left' onClick={() => HadndleEdit(id)}>Edituj</button>
            <button onClick={() => Delete(id)}>Obrisi</button>
        
            </div>
        ))}
        </div>

       </div>
       </div>
    
    )
}