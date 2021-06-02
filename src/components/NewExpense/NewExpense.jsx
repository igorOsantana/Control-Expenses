import ExpenseForm from './ExpenseForm';
import { ContainerNewExpense } from './StyleNewExpense.js';

const NewExpense = ({ onNewExpense }) => {
    return (
        <ContainerNewExpense>
            <ExpenseForm addNewExpense={ onNewExpense } />
        </ContainerNewExpense>
    );
}

export default NewExpense;