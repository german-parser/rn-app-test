import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProfileView} from 'react-native-rn-package-test-ggc';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Shared Navbar</Text>
      </View>
      <ProfileView />
      <View style={styles.container}>
        <Text>Shared Botombar</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
