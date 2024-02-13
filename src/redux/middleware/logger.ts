const Logger = (state) => (next) => (action) => {
    console.log("State => ", state.getState())
    console.log("Action => ", action)
    next(action)
    console.log("State => ", state.getState())
}

export default Logger;