import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert } from 'react-native';
import Nav from '../Nav'
import { Router,Stack,Scene,Actions} from 'react-native-router-flux'
import SignUp from './SignUp'
import Accepted from './Accepted'
import Failed from './Failed'

export default class LoginForm extends React.Component {
  state = {
    name: ['as',],
    pw: ['qw',]
  }
  onPressSignUpButton(){
     <SignUp/>
  }
  onPressLoginButton(){
    Actions.Accepted()
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.fonts}> Login here</Text>
        
        <TextInput
        placeholder="   User name"
        placeholderTextColor="#27ae60"
        style= {styles.input}
        returnKeyType='next'
        onSubmitEditing={()=> this.passwordInput.focus()}
        />
        
        <TextInput
        style= {styles.input}
        placeholder='   password'
        placeholderTextColor='#27ae60'
        secureTextEntry
        returnKeyType='go'
        ref= {(input)=> this.passwordInput=input }
        />
        
        <View style={{flexDirection: 'row',justifyContent: 'space-evenly',}}>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressSignUpButton} >
        <Text style={styles.buttonFonts}>
          Sign up
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressLoginButton} >
        <Text style={styles.buttonFonts}>
          Login
        </Text>
        </TouchableOpacity>
        
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      height: 40, 
      width: 250, 
      backgroundColor: '#1e3799', 
      alignItems: 'center', 
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#192a56',
      margin: 10,
    },
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#192a56',
      marginRight: 150
    },
    buttonStyle: {
      margin: 10,
      height: 30,
      width: 80,
      borderWidth: 3,
      borderColor: '#192a56',
      borderRadius: 5,
      backgroundColor: '#1e3799',
      paddingTop: 2,
      },
    buttonFonts: {
      fontWeight: 'bold',
      color: '#27ae60',
      fontSize: 15,
      paddingLeft: 15,
    }
});
