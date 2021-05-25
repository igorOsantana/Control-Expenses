import ExpenseItem from './ExpenseItem';
import { ContainerExpenseList, ExpenseLiseFallBack } from './StyleExpenseList.js';

const ExpenseList = props => {
    if ( props.items.length === 0 )
        return <ExpenseLiseFallBack>Nenhum gasto encontrado em { props.yearSelected }.</ExpenseLiseFallBack>;  

    return (
        <ContainerExpenseList>
            { props.items.map( expense => {
                return (
                    <ExpenseItem 
                        key={ expense.id }
                        title={ expense.title }
                        amount={ expense.amount }
                        date={ expense.date }
                    />
                )
            })}
        </ContainerExpenseList>
    );
}

export default ExpenseList;