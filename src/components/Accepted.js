import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text>Login Successful</Text>
        
        <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonFonts}>
          Log out
        </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});