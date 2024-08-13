import { useState,useEffect } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';

const apiurl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);


   const searchRecipes = async () => {
      setIsLoading(true);
      const url = apiurl + query;
      const response = await fetch(url);
      const data  = await response.json();
      console.log(data.meals)
      setRecipes(data.meals);
      setIsLoading(false);
    }

    useEffect(() => {
      searchRecipes();
    },[])

    const handleSubmit = (e) => {
      e.preventDefault();
      searchRecipes()
    } 


  return (
    <div className="App">
      <h2>Our Recipe App</h2>
      <SearchBar
      handleSubmit={handleSubmit} 
      value={query}
      onChange={event => setQuery(event.target.value) } 
      isLoading={isLoading} />
      <div className='recipes'>
        { recipes ? recipes.map(recipe => (
          <RecipeCard key={recipe.idMeal}
           recipe={recipe} />
        )) : "No Recipes Available !!!"}
      </div>
    </div>
  );
}

export default App;
