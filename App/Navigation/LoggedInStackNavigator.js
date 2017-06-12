import React from 'react'
import { StackNavigator } from 'react-navigation'
import AuthenticatedScreen from '../Containers/AuthenticatedScreen'
import {View} from 'react-native'

import styles from './Styles/NavigationStyles'

const AnotherAuthenticatedScreen = () =>
  <View style={{flex: 1, backgroundColor: 'green'}} />

// Manifest of possible screens
export default StackNavigator({
  AuthenticatedScreen: {
    screen: AuthenticatedScreen
  },
  AnotherAuthenticatedScreen: { screen: AnotherAuthenticatedScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})
