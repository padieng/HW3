let mealPlan = [];
let total = 0;

function addToMeal(dish, price) {
    mealPlan.push({ dish, price });
    total += price;
    updateMealPlan();
}

function removeFromMeal(index) {
    total -= mealPlan[index].price;
    mealPlan.splice(index, 1);
    updateMealPlan();
}

function updateMealPlan() {
    const mealPlanList = document.getElementById('meal-plan');
    const totalElement = document.getElementById('total');
    mealPlanList.innerHTML = '';

    mealPlan.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.dish} - $${item.price} `;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromMeal(index);
        listItem.appendChild(removeButton);
        mealPlanList.appendChild(listItem);
    });

    totalElement.textContent = total.toFixed(2);
}
