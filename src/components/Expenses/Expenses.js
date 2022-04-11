import "./Expenses.scss"
import CustomCard from "../UI/CustomCard";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <CustomCard className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeYear={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </CustomCard>
    )
}

export default Expenses;