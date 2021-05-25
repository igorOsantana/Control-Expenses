import ExpenseDate from './ExpenseDate';
import { ContainerExpenseItem, DescriptionExpenseItem, PriceExpenseItem } from './StyleExpenseItem.js';

const ExpenseItem = props => {
    const price = Number( props.amount ).toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } );
    return (
        <li>
            <ContainerExpenseItem>
                <ExpenseDate date={ props.date } />
                <DescriptionExpenseItem>
                    <h2>{ props.title }</h2>
                    <PriceExpenseItem>{ price }</PriceExpenseItem>
                </DescriptionExpenseItem>
            </ContainerExpenseItem>
        </li>
    );
}

export default ExpenseItem;
