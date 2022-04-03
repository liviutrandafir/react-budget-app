import "./ExpenseFilter.scss";
import { Form } from 'react-bootstrap';

function ExpenseFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <label>Filter by year</label>
            <Form.Select value={props.selected} onChange={dropdownChangeHandler} aria-label="Filter Select">
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </Form.Select>
        </div>
    )
}

export default ExpenseFilter;