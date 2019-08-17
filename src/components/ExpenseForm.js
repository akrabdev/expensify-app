import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment() ; // we get instance of moment back , not passing to it anything will return current point of time 

console.log(now.format());  // to get date out we use .format method without args year-month-day-time see docs

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        focused: false,
        error: ''
    };

     onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({amount}));
        };
    };

    onDateChange = (createdAt) => {
        if(createdAt)
        this.setState(() => ({createdAt }));
    };

    onFocusChange = ({focused}) =>{
         this.setState(() => ({focused}));
    };

    onSubmit = (e) => { 
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(()=>({
                error: 'please provide description and amount to continue'
            })) ;
        } else {
            this.setState(()=>({error: ''}));
        }

    };


    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
             <h1>Add Expense</h1>
             <form onSubmit={this.onSubmit}>
              <input
               type="text"
               placeholder="Description"
               autoFocus
               value={this.state.description}
               onChange={this.onDescriptionChange}
              />
              <input 
               type="text"
               placeholder="Amount"
               value={this.state.amount}
               onChange={this.onAmountChange}
              />

              <SingleDatePicker
               date={this.state.createdAt}
               onDateChange={this.onDateChange}
               focused={this.state.focused}
               onFocusChange={this.onFocusChange}
               numberOfMonths={1}
               isOutsideRange={() => false}
              />
              <textarea
              placeholder="add a note for your expense (optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
              >
              </textarea>
              <button>Add Expense</button>



             </form>
             
             
            </div>)
    };
};



