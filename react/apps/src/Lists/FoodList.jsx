
import React, { useState } from 'react';
import styles from './FoodList.module.css';

function FavCar() {
    const [foods, setFoods] = useState(["Banana", "Mango", "Peach"]);

    function handleAddFood(event) {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }


    return (
        <div className={styles.container}>
        <h1>Favorite fruits</h1>
        <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
            </li>)}
        </ul>
        <input type="text" id="foddInput" placeholder="Enter Favorite Fruit"/>
        <button onClick={handleAddFood}>Add Fruit</button>

        </div>
    );
}

export default FavCar;
