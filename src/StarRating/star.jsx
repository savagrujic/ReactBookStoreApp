
    import { useState } from "react"
    import { FaStar } from "react-icons/fa"
    import "./style.css"
    export default function Zvezda({brojZvezda = 20}) {


        const [rating, SetRating] = useState(0)
        const [hover, SetHover] = useState(0)

        return <div>



        {
            [...Array(brojZvezda)].map((_,index) => {
                index+=1
                return <FaStar
            
                className= {index <= (hover || rating) ? 'active' : 'inactive'}
                key={index}
                onClick={() => SetRating(index)}
                onMouseMove={() => SetHover(index)}
                onMouseLeave={() => SetHover(rating)}
                
                />
            
            })
            
        }
        
        </div>
    }