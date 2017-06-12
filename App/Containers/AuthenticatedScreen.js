import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import styles from './Styles/AuthenticatedScreenStyle'
import { NavigationActions } from 'react-navigation'

class AuthenticatedScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>You are logged in</Text>
        <Button title='Go to Another Authenticated Screen' onPress={this.props.goToAnotherAuthenticatedScreen} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToAnotherAuthenticatedScreen: () => dispatch(NavigationActions.navigate({ routeName: 'AnotherAuthenticatedScreen' }))
  }
}

export default connect(null, mapDispatchToProps)(AuthenticatedScreen)
