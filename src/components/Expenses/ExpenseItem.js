import { useState } from "react";
import { Button } from 'react-bootstrap';

import ExpenseDate from "./ExpenseDate";
import CustomCard from "../UI/CustomCard";
import './ExpenseItem.scss'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const changeTitleHandler = () => {
        setTitle('Updated');
    }
    return (
        <CustomCard className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <Button onClick={changeTitleHandler} variant="primary">Change title</Button>
        </CustomCard>
    )
}

export default ExpenseItem;