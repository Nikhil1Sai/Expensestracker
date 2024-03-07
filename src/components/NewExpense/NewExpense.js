import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.SaveNewExpense(expenseData);
    };

    return (
        <Card className="new-expense">
            <ExpenseForm onSubmitExpenseData = {saveExpenseDataHandler}/>
        </Card>
    )
}

export default NewExpense;