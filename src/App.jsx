import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox.jsx";
import AddFoodForm from "./components/AddFoodForm";
function App() {
  const [foods, setFoods] = useState(foodsJson);
  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood];

    setFoods(updatedFood);
  }
  const deleteFood = (foodId) => {
    const updatedFoods = [...foods]
    foods.forEach((food, place) => {
      if (food.id === foodId) {
        updatedFoods.splice(place, 1)
      }
    })
    setFoods(updatedFoods)
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood} />
      {foods.map((food) => {
        return (
          <FoodBox key={food.id} food={food} deletion={deleteFood}></FoodBox>
        )
      })}

    </div>
  );
}
export default App;