import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const changeFilterYearHandler = (currYear) => {
    setFilterYear(currYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );



  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={changeFilterYearHandler}
        selected={filterYear}
      ></ExpensesFilter>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
