import { NavigationActions } from 'react-navigation';

let navigator;
export const setNavigator = (nav) => {
  navigator = nav;
};
// to use reactnavigation out side react component
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
