import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({
  adapter: new Adapter()
});

//now whenever we use enzyme in our test cases, it will be adding support for v16 of react.