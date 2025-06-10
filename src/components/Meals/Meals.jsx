import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './meals.css';

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((response) => {
      setMeals(response.data.meals);
    }).catch(error => {
      console.log(error);
    });
  }, []);

    const mealsList = meals.map(({idMeal, strMeal, strMealThumb}) => {
      return (
        <section className='meal-card' key={idMeal}>
          <img src={strMealThumb} alt={strMeal}/>
          <section className='meal-content'>
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      );
    });

  return (
    <div className='meals-container'>
      {mealsList}
    </div>
  )
}

export default Meals