

const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const lowerCaseText = text.toLowerCase();
        const lowerCaseDescription = expense.description.toLowerCase();
        const textMatch= typeof text !== 'string' || lowerCaseDescription.includes(lowerCaseText);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date')
        return ( a.createdAt > b.createdAt ? -1:1 );

        return (a.amount > b.amount ? -1:1);
    });
};

export default getVisibleExpenses;