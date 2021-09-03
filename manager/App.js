import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

import MainScreen from './src/screens/MainScreen';
import EmployeeList from './src/screens/EmployeeList';
import EmployeeCreate from './src/screens/EmployeeCreate';
import EmployeeEdit from './src/screens/EmployeeEdit';




const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Main: MainScreen,
  }),
  mainFlow: createStackNavigator({
    EmpList: EmployeeList,
    EmpCreate: EmployeeCreate,
    EmpEdit: EmployeeEdit
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  )
};