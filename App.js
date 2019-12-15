import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput} from 'react-native'

class AppCSIChRN extends Component{

  saludo = ()=>{Alert.alert('Iniciando Sesion...')};

  render(){
    return(
      <ImageBackground source={require('./img/degradado3.jpg')} style={styles.container}>
      
      <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require('./img/logoppal.png')} style={styles.logo} />
          </View>
          
          <View style={styles.headerRight}>
            <View style={styles.login}>
            <Button title="Login" onPress={this.saludo} />
            </View>
          </View>
      </View>      

      <View style ={[styles.body, styles.negrita]}>
        <View>
        <Text>
          Welcome to CSIChRN
        </Text>
        <TouchableOpacity>
        <TextInput style={styles.textInput} placeholder="Usuario" placeholderTextColor="black" maxLength={15} >
        </TextInput>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="black" maxLength={15} >
        </TextInput>
        </TouchableOpacity>
            <View style={styles.login}>
            <Button title="Login" onPress={this.saludo} />
            </View>
      </View>
      <View style={styles.footer}>
          <View style={styles.footerLeft}>
          <Text style={{textAlign: 'center'}}>
            Aqui Va el FooterLeft
          </Text>
          </View>
          <View style={styles.footerCenter}>
          <Text style={{textAlign: 'center'}}>
            Aqui Va el FooterCenter
          </Text>
          </View>
          <View style={styles.footerRight}>
          <Image source={require('./img/jaguarazteca.png')} style={styles.footerLogo} />
          </View>
      </View>

      </ImageBackground>
    )
  };
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column'
  },
  negrita : {
    fontWeight: 'bold'
  },
  header: {
      flex: 0.2,
      flexDirection: 'row',
      marginTop:40
  },
  headerLeft:{
    flex : 1,
  },
  headerRight : {
    flex : 1,
  },
  body :{
    flex: .9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  login : {
    marginRight:10,
    marginLeft:110,
    marginTop: 5,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius : 50,
    resizeMode: 'contain'
  },
  saludo: {
    marginTop: 0
  },
  footer : {
    flex: 0.1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom:12
  },
  footerLeft: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  footerRight: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  footerCenter: {
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  footerLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain'
  },
  textInput: {
    borderWidth:1,
    borderColor: 'black',
    width: 180,
    padding: 5,
    marginTop: 10,
    backgroundColor: 'white'
  },
})

export default AppCSIChRN