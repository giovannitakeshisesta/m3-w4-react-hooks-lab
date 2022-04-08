import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({item}) {
  return (
    <div className="card m-2" style={{width: "12rem",height:"18rem"}}>
        <img src={item.strDrinkThumb}  className="card-img-top" alt={item.strDrink}/>
        <div className="card-body">
        <Link to={`/searchByCocktail/${item.strDrink}`}>
            <h5 className="card-text">{item.strDrink}</h5>
        </Link>
        </div>
    </div>
  )
}
