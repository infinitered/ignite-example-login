import Actions, { reducer, INITIAL_STATE, isRehydrationComplete } from '../../App/Redux/AppStateRedux'

test('initial state', () => {
  const state = reducer(INITIAL_STATE)

  expect(state.rehydrationComplete).toBe(false)
  expect(isRehydrationComplete(state)).toBe(false)
})

test('setRehydrationComplete', () => {
  const state = reducer(INITIAL_STATE, Actions.setRehydrationComplete())

  expect(state.rehydrationComplete).toBe(true)
  expect(isRehydrationComplete(state)).toBe(true)
})
