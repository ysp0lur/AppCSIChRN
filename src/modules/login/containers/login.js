import React, {Component} from 'react'
import {Image, StyleSheet, AsyncStorage} from 'react-native'
import { AppLoading } from 'expo';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Icon,Body, Form, Item, Label, Input} from 'native-base';
import * as Font from 'expo-font';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const API = 'http://192.168.100.74:4000/api/';
// var data = {username: 'Admin',password:'123456As'};
class AppCSIChRN extends Component{
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        isReady: false,
      };
    }
    
    login = () => {
	//Hacemos una constante donde haremos toda la consulta de la consulta (redundante no?), fijate que despues del nombre del archivo va "?opcion=1" esto es importante ya que con esto podemos elegir que acción hará el archivo de consulta en PHP.
            fetch(`${API}user/auth/signin`, {
		//Le indico que la consulta es de forma POST
            method: 'POST',
		//Le indico que tipo de consulta va a obtener o su contenido
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
		//Le indico que el cuerpo es un JSON y quiero que lo convierta así.
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
        }).then((response) => response.json()) 
        .then((res) => { 
          console.log(res);
              if(res.status === 'true') {
                AsyncStorage.setItem('username',res.username);
                this.props.navigation.navigate('Profile');
              }else{
                alert(res.message);
              }
        }).done();
    }
     Logout = () => {
	//Hacemos una constante donde haremos toda la consulta de la consulta (redundante no?), fijate que despues del nombre del archivo va "?opcion=1" esto es importante ya que con esto podemos elegir que acción hará el archivo de consulta en PHP.
            fetch(`${API}user/auth/logout`, {
		//Le indico que la consulta es de forma POST
            method: 'GET',
		//Le indico que tipo de consulta va a obtener o su contenido
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
		//Le indico que el cuerpo es un JSON y quiero que lo convierta así.
            body: JSON.stringify()
        }).then((response) => response.json()) //Si es así que realice un tipo mapeo
        .then((res) => { 
          console.log(res);
              if(res.status === 'true') {
                alert(res.message);
                this.props.navigation.navigate('Register')
              }else{
                alert(res.message);
              }
        }).done();
      }

    async componentDidMount() {
      this._loadInitialState().done();
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ isReady: true });
    }

    _loadInitialState = async () =>{
      
      var value = await AsyncStorage.getItem('username');

      if (value !== null){
        this.props.navigation.navigate('Profile');
      }
    }

    Register = () =>{
        this.props.navigation.navigate('Register')
    }
  
    render() {
      if (!this.state.isReady) {
        return <AppLoading />;
      }
  
      return (
        <Container>
        <Content contentContainerStyle={styles.content}>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://comiteseguridad.herokuapp.com/img/Logos-02.png'}} />
                <Body>
                  <Text>CSICh</Text>
                  <Text note>December 25, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label style={{marginTop: -10}}><Ionicons name='md-person' size={20}/>Username</Label>
                <Input 
                    keyboardType='email-address'
                    onChangeText= {(username) => this.setState({username}) }
                />
              </Item>
              <Item floatingLabel last>
              <Label style={{marginTop: -10}}><Ionicons name='md-lock' size={20}/>Password</Label>
                <Input 
                    secureTextEntry={true}
                    onChangeText= { (password)=> this.setState({password}) }
                />
              </Item>
            </Form>
            <CardItem>
              <Body>
                <Image source={require('../../../../img/jaguarazteca.png')} style={{height: 150, width: 150, marginHorizontal: 90}}/>
                
              </Body>
            </CardItem>
            <CardItem>
              {/* <Right> */}
                <Button transparent onPress={this.Register}>
                    <Text>Register</Text>
                </Button>
                <Button transparent onPress={this.Logout}>
                    <Text>Logout</Text>
                </Button>
                <Button iconLeft style={styles.buttonSignin} onPress={this.login}>
                  <Icon name='log-in'/>
                  <Text>SignIn</Text>
                </Button>
              {/* </Right> */}
            </CardItem>
          </Card>
        </Content>
      </Container>
      );
    }
  }
const styles = StyleSheet.create({
  textCenter:{
    textAlign: 'center',
    width: '100%'
  },
  content:{
    flex: 1,
    justifyContent: 'center'
  },
  buttonSignin: {
    marginLeft: '43%'
  }
})

export default AppCSIChRN