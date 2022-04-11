import { useState } from "react";
import { Button } from 'react-bootstrap';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss"

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    
    const stopEditing = () => {
      setIsEditing(false);
    }

    return(
        <div className="new-expense">
            { !isEditing &&
                <div className="new-expense-button">
                    <Button
                        variant="light"
                        onClick={startEditingHandler}
                    >+</Button>
                </div>
            }
            { isEditing &&
                <ExpenseForm
                    onSaveExpanseData={saveExpenseDataHandler}
                    onCancel={stopEditing}
                />
            }
        </div>
    )
}

export default NewExpense;