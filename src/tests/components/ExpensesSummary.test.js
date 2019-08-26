import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';


test('should render ExpensesSummary correctly', () => {
const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
expect(wrapper).toMatchSnapshot();
});