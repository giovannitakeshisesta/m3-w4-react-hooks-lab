import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "../App.css"
import Table from '../components/Table';
import NameContext, { useNameContext } from '../contexts/NameContext';
import { searchByCocktail } from '../services/CocktailService';


export default function CocktailView() {
    const { id } = useParams()
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        searchByCocktail(id)
        .then(response => {setCocktail(response.drinks[0])})
    }, []);
   
    //console.log(cocktail);
    const value = useNameContext(NameContext) 
    
  return (
    <div>
    {value.name &&  <p className='float'>Hola {value.name}</p>  }

    {cocktail ? 
        <Table cocktail={cocktail}/>
     :
        <p>...loading</p>
    }
    </div>
  )
}
