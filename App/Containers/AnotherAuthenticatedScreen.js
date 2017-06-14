import React from 'react'
import { View, Text } from 'react-native'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/AnotherAuthenticatedScreenStyle'

class AnotherAuthenticatedScreen extends React.Component {
  render () {
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>You are still logged in</Text>
        <RoundedButton text='Go back one screen' onPress={() => goBack()} />
      </View>
    )
  }
}

export default AnotherAuthenticatedScreen
