import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './modules/login/containers/login';
import Register from './modules/register/container/register';
import Profile from './modules/profile/container/profile';

const LoginNav = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'LogIn'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile'
        }
    }
}
,{headerMode: 'screen'});

export default createAppContainer(LoginNav)