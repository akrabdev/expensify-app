import React from 'react';

const ExpenseEditPage = (props) => (
    <div>
     Editing the expense of id {props.match.params.id}
    </div>
);


export default ExpenseEditPage;