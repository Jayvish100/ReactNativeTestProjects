import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};


// let navigator;

// const setTopLevelNavigator = navigatorRef => {
//   navigator = navigatorRef;
// };

// const navigate = (routeName, params) => {
//   navigator.dispatch(
//     NavigationActions.navigate({
//       routeName,
//       params
//     })
//   );
// };