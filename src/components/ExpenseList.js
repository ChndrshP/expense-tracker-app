import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        {id:1, name: 'Russian', cost: 500},
        {id:2, name: 'Old Monk', cost: 100},
        {id:3, name: 'Asian', cost: 300}
    ];
    return(
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>    
    )
}

export default ExpenseList;
