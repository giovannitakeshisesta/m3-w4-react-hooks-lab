import React from 'react'

export const Form = ({handleSubmit, onHandleChange,name}) => {
  return (

    <form onSubmit={handleSubmit} name={name} className=" frcc m-3">
        <div>
          <label htmlFor="title">
          {name==="ingredient" && "Search by ingredient"}
          {name==="name" && "Write your name"}
          </label>
          <input
            onChange={onHandleChange} 
            name={name}
            className="form-control myInput" id="title" 
            placeholder={name==="ingredient" && "ex: Gin"}
          />
        </div>

        <button className=" submitBtn">
          Submit
        </button>
    </form>
  )
}
