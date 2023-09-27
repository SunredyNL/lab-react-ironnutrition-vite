const FoodBox = ({ food, deletion }) => {
    return (
        <div>
            <p>{food.name}</p>
            <img src={food.image} height={100} />
            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>
            <p>
                <b>Total Calories: {food.servings * food.calories} </b> kcal
            </p>
            <button onClick={() => deletion(food.id)}>Delete</button>
        </div>
    )
}
export default FoodBox