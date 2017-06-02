jest
.mock('react-native-device-info', () => {
  return { isTablet: jest.fn(() => { return false }) }
})
