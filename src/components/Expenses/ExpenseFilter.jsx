import { ContainerExpensesFilter, ControlExpensesFilter } from './StyleExpenseFilter.js';

const ExpensesFilter = ({ onChangeFilter, selected, expenses }) => {
  
  const allYearsFromExpenses = expenses.map( expense => {
    return expense.date.split('-')[0];
  });

  const yearsToFilter = allYearsFromExpenses.filter(( expense, index ) => {
    return allYearsFromExpenses.indexOf( expense ) === index;
  });

  const dropdownChangeHandler = event => {
      onChangeFilter( event.target.value );
  };

  const titleContent = selected === 'default' ? 'Controle de despesas' : `Despesas em ${ selected }`;

  return (
    <ContainerExpensesFilter>
      <ControlExpensesFilter>
        <h2>{ titleContent }</h2>
        <select value={ selected } onChange={ dropdownChangeHandler }>
          <option value="default">Filtrar por ano</option>
          { yearsToFilter.map(( year, index ) => {
            return <option key={ index } value={ year }>{ year }</option>;
          })}
        </select>
      </ControlExpensesFilter>
    </ContainerExpensesFilter>
  );
};

export default ExpensesFilter;