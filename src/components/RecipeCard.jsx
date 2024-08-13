import React from 'react'

const RecipeCard = ({recipe}) => {
  const {idMeal, strMeal, strCategory, strMealThumb} = recipe;
    return (
    <div className='card'>
        <img 
            src={strMealThumb}
            alt={strMeal}
            className='card-img'
        />
        <div className="card-body">
            <span className='category'>{strCategory}</span>
            <h3>{strMeal}</h3>
            <a href={`https://www.themealb.com/meal/` + idMeal} 
            target='_blank' >Ingridients</a>
        </div>
    </div>
  )
}

export default RecipeCard