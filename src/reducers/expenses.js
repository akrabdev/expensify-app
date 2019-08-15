

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE': 
        return [
            ...state, // < obj     ... > will start with elements of state array. old:// return state.concat(action.expense) 
            action.expense
        ];
        
        case 'REMOVE_EXPENSE': 
            return [
                ...state.filter((element)=> element.id != action.id)
            ];

        case 'EDIT_EXPENSE':
             return state.map((expense)=> {
                if(expense.id === action.id) {
                    return { 
                        ...expense,
                        ...action.update
                    };
                }
                else 
                return expense;
            });
        
            
        

        default: return state;

    };
};

export default expensesReducer ; 