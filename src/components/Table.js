import React from 'react'

export default function Table({cocktail}) {
  return (
    <div className='frcc mt-5'>
        <div className='imgDiv'>
            <img src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="imagebig"
                />
        </div>

        <div className='descriptionDiv'>
            <h1> {cocktail.strDrink}</h1>
            <div>
                <table>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cocktail.strMeasure1}</td>
                        <td>{cocktail.strIngredient1} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure2}</td>
                        <td>{cocktail.strIngredient2} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure3}</td>
                        <td>{cocktail.strIngredient3} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure4}</td>
                        <td>{cocktail.strIngredient4} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure5}</td>
                        <td>{cocktail.strIngredient5} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure6}</td>
                        <td>{cocktail.strIngredient6} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure7}</td>
                        <td>{cocktail.strIngredient7} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure8}</td>
                        <td>{cocktail.strIngredient8} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure9}</td>
                        <td>{cocktail.strIngredient9} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure10}</td>
                        <td>{cocktail.strIngredient10} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure11}</td>
                        <td>{cocktail.strIngredient11} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure12}</td>
                        <td>{cocktail.strIngredient12} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure13}</td>
                        <td>{cocktail.strIngredient13} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure14}</td>
                        <td>{cocktail.strIngredient14} </td>
                    </tr>
                    <tr>
                        <td>{cocktail.strMeasure15}</td>
                        <td>{cocktail.strIngredient15} </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <h4>Preparation:</h4>
            <p>{cocktail.strInstructions}</p>
        </div>
    </div>
  )
}
