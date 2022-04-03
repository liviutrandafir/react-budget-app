import "./Expenses.scss"
import ExpenseItem from "./ExpenseItem";
import CustomCard from "../UI/CustomCard";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(filteredYear);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <CustomCard className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeYear={filterChangeHandler} />
            {filteredExpenses.length === 0 && <p>No Expenses found.</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </CustomCard>
    )
}

export default Expenses;