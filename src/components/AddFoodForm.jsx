import { useState } from "react";
function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const nameInput = (input) => {
        setName(input.target.value);
    };

    const imageInput = (input) => {
        setImage(input.target.value);
    };

    const caloriesInput = (input) => {
        setCalories(input.target.value);
    };

    const servingsInput = (input) => {
        setServings(input.target.value);
    };

    const submit = (input) => {
        input.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings
        };

        props.addNewFood(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");

    };

    return (
        <form onSubmit={submit}>
            <label> Name:
                <input type="text"
                    name="name"
                    value={name}
                    onChange={nameInput}
                ></input>
            </label>
            <label> Image:
                <input type="text"
                    name="image"
                    value={image}
                    onChange={imageInput}
                ></input>
            </label>
            <label> Calories:
                <input type="number"
                    name="calories"
                    value={calories}
                    onChange={caloriesInput}
                ></input>
            </label>
            <label> Servings:
                <input type="number"
                    name="servings"
                    value={servings}
                    onChange={servingsInput}
                ></input>
            </label>
            <button type="submit">Create</button>
        </form>
    )
}

export default AddFoodForm;