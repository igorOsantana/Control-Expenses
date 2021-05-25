import { ContainerNewExpense } from './StyleNewExpense.js';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense( expenseData );
    };

    return (
        <ContainerNewExpense>
            <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
        </ContainerNewExpense>
    );
}

export default NewExpense;