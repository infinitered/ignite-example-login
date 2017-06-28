import { NavigationActions } from 'react-navigation'
import { PrimaryNav } from '../Navigation/AppNavigation'

const { navigate, reset } = NavigationActions
const { getStateForAction } = PrimaryNav.router

const INITIAL_STATE = getStateForAction(
  navigate({ routeName: 'LoadingScreen' })
)
const NOT_LOGGED_IN_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    navigate({ routeName: 'NotLoggedInStack' })
  ]
}))
const LOGGED_IN_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    navigate({ routeName: 'LoggedInStack' })
  ]
}))
/**
 * Creates an navigation action for dispatching to Redux.
 *
 * @param {string} routeName The name of the route to go to.
 */
// const navigateTo = routeName => () => navigate({ routeName })

export function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_REHYDRATION_COMPLETE':
      return NOT_LOGGED_IN_STATE
    case 'LOGOUT':
      return NOT_LOGGED_IN_STATE
    case 'LOGIN_SUCCESS':
      return LOGGED_IN_STATE
    case 'AUTO_LOGIN':
      return LOGGED_IN_STATE
    default:
      return state
  }
}
