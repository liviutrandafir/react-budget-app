import ExpenseDate from "./ExpenseDate";
import CustomCard from "../UI/CustomCard";
import './ExpenseItem.scss'

function ExpenseItem(props) {
    return (
        <CustomCard className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </CustomCard>
    )
}

export default ExpenseItem;