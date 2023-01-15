import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={{ flex: 1, backgroundColor: '#fff' }}
    >
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
