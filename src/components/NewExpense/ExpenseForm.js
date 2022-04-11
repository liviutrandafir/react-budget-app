import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import "./ExpenseForm.scss"

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpanseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                />
            </Form.Group>

            <Form.Group className="form-buttons" controlId="formBasicEmail">
                <Button variant="primary" type="button" onClick={props.onCancel}>Cancel</Button>
                <Button type="submit" variant="primary">Add Expense</Button>
            </Form.Group>
        </Form>
    )
}

export default ExpenseForm;