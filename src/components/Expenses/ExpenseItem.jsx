import ExpenseDate from './ExpenseDate';
import { ContainerExpenseItem, DescriptionExpenseItem, PriceExpenseItem } from './StyleExpenseItem.js';

const ExpenseItem = props => {
    const price = Number( props.amount ).toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } );
    return (
        <li>
            <ContainerExpenseItem>
                <DescriptionExpenseItem>
                    <div>
                        <ExpenseDate date={ props.date } />
                        <h2>{ props.title }</h2>
                    </div>
                    <PriceExpenseItem>{ price }</PriceExpenseItem>
                </DescriptionExpenseItem>
            </ContainerExpenseItem>
        </li>
    );
}

export default ExpenseItem;
