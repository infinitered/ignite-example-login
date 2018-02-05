import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import LoadingScreen from '../Containers/LoadingScreen'
import LoggedInStackNavigator from './LoggedInStackNavigator'
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export const PrimaryNav = StackNavigator({
  LoadingScreen: { screen: LoadingScreen },
  LoggedInStack: { screen: LoggedInStackNavigator },
  NotLoggedInStack: { screen: NotLoggedInStackNavigator }
}, {
  // Default config for all screens
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const Navigation = ({ dispatch, navigation }) => {
  return (
    <PrimaryNav
      navigation={addNavigationHelpers({ dispatch, state: navigation, addListener: createReduxBoundAddListener("root") })}
    />
  )
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    navigation: state.navigation
  }
}

// export default PrimaryNav
export default connect(mapStateToProps)(Navigation)
