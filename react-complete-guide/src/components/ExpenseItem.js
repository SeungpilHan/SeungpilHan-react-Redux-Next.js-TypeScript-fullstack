//Shift + option + f : 소스코드 자동정렬
import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2022, 2, 6);
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
      <h2>{expenseTitle}</h2>
      <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
