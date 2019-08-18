import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {setupTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates'


class ExpenseListFilters extends React.Component {
    
    state = {
        focusedInput: null
    };

    onDatesChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    };

    onFocusChange = (focusedInput) =>{
        this.setState(()=>({focusedInput }))
    }
   
    render () {
       return  (
            <div>
             <input type="text" value={this.props.filters.text} onChange={(e) => {
                 this.props.dispatch(setupTextFilter(e.target.value));
             }}/>
             <select value={this.props.filters.sortBy} onChange={(e) => {
                 this.props.dispatch(e.target.value === 'date'?sortByDate():sortByAmount()) }}>
                 
             <option  disabled>sort</option>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
        
             </select>
             {console.log(this.props.filters.startDate)}

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
        );
             }
};





const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}; 


export default connect(mapStateToProps)(ExpenseListFilters);