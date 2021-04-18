import React  from 'react';
import {
    View, 
    Text,
    StyleSheet, 
   TeaxtInput,
   KeyboardAvoidingView,
   TouchableOpacity,
   } from 'react-native';

export default class LoginScreen extends React.Component{
    constructor() {
        super();
        this.state = {
          text: '',
          text: '',
        };
      }

      login = async (email,password)=>{
          if(email && password){
              try{
                  const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                  if(response){
                      this.props.navigation.navigate('Transaction')
                  }
              }
              catch(error){
                  switch(error.code){
                      case 'auth/user-not-found':
                          Alert.alert("usr doesnt exist")
                          break
                      case 'auth/invalid-email':
                      Alert.alert ('incorrect email or password')
                      break    
                  }
              }
          }
          else {
              Alert.alert("enter email and password");
          }
      }
    render(){
        return(
            <KeyboardAvoidingView>
                <View>
                <Text>this is login screen</Text>

        <TextInput style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />

        <TextInput style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        /> 
 </View>
          
          <View>
           <TouchableOpacity
           onPress={this.login}>

               <Text>Login</Text>

           </TouchableOpacity>
              
          </View>
           
            </KeyboardAvoidingView>
        )
    }
}