import "./Expenses.scss"
import ExpenseItem from "./ExpenseItem";
import CustomCard from "../UI/CustomCard";

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <CustomCard className="expenses">
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
        </CustomCard>
    )
}

export default Expenses;