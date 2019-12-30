import React, {Component} from 'react'
import {Image, StyleSheet, AsyncStorage} from 'react-native'
import { AppLoading } from 'expo';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Icon,Body, Form, Item, Label, Input} from 'native-base';
import * as Font from 'expo-font';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class Profile extends Component{
    
    render() {
      return (
       <Container>
           <Text>Este es el Perfil de: </Text>
       </Container>
      );
    }
  }
export default Profile