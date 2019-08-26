

export default  (expenses) =>
     expenses
    .map((expense) =>  expense.amount)
    .reduce(((ax, amount) => ax + amount),0);
 



