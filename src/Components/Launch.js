import React from 'react'
import { useParams } from 'react-router-dom'
import Products from "../Data"

function Launch() {
    const { id } = useParams()
    const Shoes = Products[id]

    if(!Shoes)
        return <h1>Item Not Found</h1>
    return (
        <div className="Shoes">
            <div className="item">
                <div className="item--img">
                    <img src={`../${Shoes.img}`} alt={Shoes.name}/>
                </div>
                <h3>{Shoes.name}</h3><br/>
                <h4>{Shoes.price}</h4>
        </div>
        </div>
        
    )
}

export default Launch
