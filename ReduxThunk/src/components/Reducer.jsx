const Reducer = (state, action) => {
  switch (action.type) {
      case "fetchData":
          return {
              data : action.payload
          }    
      default:
          break;
  }
}

export default Reducer;