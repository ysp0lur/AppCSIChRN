import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native'

class AppCSIChRN extends Component{

  saludo = ()=>{Alert.alert('Iniciando Sesion...')}
  render(){
    return(
      <View style={styles.container}>

      <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require('./img/logoppal.png')} style={styles.logo} />
          </View>
          
          <View style={styles.headerRight}>
            <Button title="Login" onPress={this.saludo} />
          </View>
      </View>      

      <View style ={styles.body}>
        <Text>
          Aqui Empieza CSIChRN
        </Text>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column'
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
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius : 50,
    resizeMode: 'contain'
  }
})

export default AppCSIChRN