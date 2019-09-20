import React from 'react';
import {connect} from 'react-redux';
import {setupTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates'


export class ExpenseListFilters extends React.Component {
    
    state = {
        focusedInput: null
    };

    onDatesChange = ({startDate,endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);

    };

    onFocusChange = (calendarFocused) =>{
        this.setState(()=>({calendarFocused }))
    };

    onTextChange = (e) => {
        this.props.setupTextFilter(e.target.value);
    };

    onSelectChange = (e) => {
        (e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount() );
        
    };
   
    render () {
       return  (
            <div className="content-container">
             <div className="input-group">
              <div className="input-group__item">
               <input className='text-input' type="text" placeholder="Search Expense" value={this.props.filters.text} onChange={this.onTextChange}/>
              </div>
              <div className="input-group__item">
               <select className='select' value={this.props.filters.sortBy} onChange={this.onSelectChange}>    
                <option  disabled>sort</option>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
               </select>
              </div>
              <div className="input-group__item">
               <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                showClearDates={true}
               />
              </div>
             
             </div>
            </div>
        );
             }
};





const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (startDate) => { dispatch(setStartDate(startDate)) },
        setEndDate: (endDate) => {dispatch(setEndDate(endDate))},
        setupTextFilter: (value) => {dispatch(setupTextFilter(value))},
        sortByDate: () => {dispatch(sortByDate())},
        sortByAmount: () => {dispatch(sortByAmount())}

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);