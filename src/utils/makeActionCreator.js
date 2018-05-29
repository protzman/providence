export const makeActionCreator = (type, ...argNames) => function(...args) {
  console.log('in make action creator')
  const action = { type }
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action
}
