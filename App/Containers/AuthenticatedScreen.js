import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import styles from './Styles/AuthenticatedScreenStyle'
import LoginActions from '../Redux/LoginRedux'

class AuthenticatedScreen extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>You are logged in</Text>
        <RoundedButton
          text='Go to Another Authenticated Screen'
          onPress={() => navigate('AnotherAuthenticatedScreen')}
        />
        <RoundedButton text='Logout' onPress={this.props.logout} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LoginActions.logout())
  }
}

export default connect(null, mapDispatchToProps)(AuthenticatedScreen)
