import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  console.log(state);
  return (
    <View style={styles.container}>
      {/* <NavigationEvents
        //when just click to the button to navigate
        onWillFocus={() => {}}
        //when the navigation done
        onDidFocus={() => {}}
        // call when just navigate to this screen
        onWillBlur={clearErrorMessage}
        // call when transation complete
        onDidBlur={() => {}}
      /> */}

      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Dont have an account? Sign Up instead!"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
