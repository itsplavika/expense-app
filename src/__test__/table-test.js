import React from 'react';
import Table from '../components/table';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

describe('Table',() => {

const initialState = [
  { incomeSource: 'Job', expenditure: 'House rent', proportion: 30 , id: 1},
  { incomeSource: 'Job', expenditure: 'Cab rent', proportion: 5 , id: 2},
  { incomeSource: 'Job', expenditure: 'Phone EMI', proportion: 20 , id:3},
  { incomeSource: 'Freelancing', expenditure: 'Party', proportion: 10 , id:4},
  { incomeSource: 'Freelancing', expenditure: 'House rent', proportion: 20 , id:5},
];
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
      store = mockStore(initialState)
      wrapper = mount(
        <Provider store={store}>
            <Table />
        </Provider>
      );
  })
  
  it('renders Table', () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

//   it('verifies if header footer main loads', () => {
//     expect(wrapper.find('header')).toHaveLength(1);
//     expect(wrapper.find('main')).toHaveLength(1);
//     expect(wrapper.find('footer')).toHaveLength(1);
//   });


});
