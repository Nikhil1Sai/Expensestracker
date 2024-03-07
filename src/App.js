import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

const InitialExpenses = [
  {
    id: "e0",
    title: "Books",
    amount: 150,
    date: new Date(2024, 7, 14),
  },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 300,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, addExpenses] = useState(InitialExpenses);

  
  const addExpenseHandler = (expense) => {
    // prevExpenses will be pointed to expenses
    addExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="main">
      <NewExpense SaveNewExpense= {addExpenseHandler} />
      <Expenses items ={expenses} />
    </div>
  );
}

export default App;
