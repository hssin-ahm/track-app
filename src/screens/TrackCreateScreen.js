import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native';
import Map from '../components/Map';
import { View } from 'react-native';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={{ flex: 1, backgroundColor: '#fff' }}
    >
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text h3>TrackCreateScreen</Text>
        {/* <Map /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackCreateScreen;
