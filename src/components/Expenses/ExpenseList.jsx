import ExpenseItem from './ExpenseItem';
import { ContainerExpenseList, ExpenseLiseFallBack } from './StyleExpenseList.js';

const ExpenseList = ({ hasExpenses, items, yearSelected, isLoading }) => {
    if ( hasExpenses === false && isLoading === false )
        return <ExpenseLiseFallBack>Comece adicionando alguma despesa...</ExpenseLiseFallBack>;  
    if ( yearSelected === 'default' && hasExpenses ) 
        return <ExpenseLiseFallBack>Escolha um ano acima para ver suas despesas.</ExpenseLiseFallBack>;  
    if ( isLoading )
        return <ExpenseLiseFallBack>Carregando...</ExpenseLiseFallBack>;  
    if ( items.length === 0 && isLoading === false )
        return <ExpenseLiseFallBack>Nenhuma despesa encontrada em { yearSelected }.</ExpenseLiseFallBack>;  

    return (
        <ContainerExpenseList>
            { items.map( expense => {
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