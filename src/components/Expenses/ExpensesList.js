import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    return (
        <div>
            {props.filteredExpenses.length === 0 && <p>No Expenses found.</p>}
            {props.filteredExpenses.length > 0 &&
            props.filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    )
}

export default ExpensesList;