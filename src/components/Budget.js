import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, maxBudget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses) {
            alert(`The budget cannot be lower than total expenses ${currency}${totalExpenses}`);
            return;
        } else if (event.target.value > maxBudget) {
            alert(`The budget cannot be greater than ${currency}${maxBudget}`);
            return;
        }

        setNewBudget(event.target.value);
    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" min={totalExpenses} max={maxBudget} value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;