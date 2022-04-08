import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { Form } from '../components/Form';
import NameContext, { useNameContext } from '../contexts/NameContext';

import  {searchByIngredient}  from '../services/CocktailService';

export default function Home() {

  const [list, setList] = useState("")
  const [message, setMessage] = useState("")
  const [ingredient, setIngredient] = useState("");
  const [userName, setUserName] = useState("")
  const value = useNameContext(NameContext)
  
  const onHandleChange = (e) => {
    if (e.target.name === "ingredient"){
      setIngredient(e.target.value)
    }
    if (e.target.name === "name"){
      setUserName(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.name==="ingredient"){
      if (ingredient){
        searchByIngredient(ingredient)
        .then(response => {
          if (response){
            setList(response)
            setMessage(` ${response.drinks.length}  Results for the word  "${ingredient}"`)
          } else {
            setMessage(`No results for the word  "${ingredient}"`)
          }
        })  
      }
      else {
        setMessage("...insert the name of an ingredient")
      }
    }

    if (e.target.name.name==="name"){
      value.changeName(userName) 
    }
  }

  return (
    <div className='fccc'>
      {value.name &&  <p className='float'>Hola {value.name}</p>  }
      
      <Form name={"name"}
        onHandleChange={onHandleChange} 
        handleSubmit={handleSubmit}
      />

      <Form name={"ingredient"}
        onHandleChange={onHandleChange} 
        handleSubmit={handleSubmit}
      />

      <h2>{message}</h2>

      <div className="d-flex flex-wrap justify-content-around">
        {list.drinks &&
          list.drinks.map(item => {
            return (
              <Card key={item.idDrink}  item={item}/>     
            )
          })
        }
      </div>
    </div>
  )
}
