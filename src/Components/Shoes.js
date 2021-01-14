import React from 'react'
import {Link} from 'react-router-dom'
import Products from "../Data"

function Shoes() {
    return (
        <div className="Shoes">
            {Object.keys(Products).map(keyName => {
                const Shoes = Products[keyName]
                return(
                    <Link
                        className="item"
                        key={keyName} 
                        to={`/shoes/${keyName}`}>
                        <div className="item--img">
                            <img src={Shoes.img} alt={Shoes.name}/>
                        </div>
                        <h3>{Shoes.name}</h3>
                    </Link>
                )
            })}            
        </div>
    )
}

export default Shoes
