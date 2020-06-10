export const update = (field, that) => {
  debugger;
  return (e) => {
    debugger;
    let info = that.state.info;
    debugger;
    info[field] = e.currentTarget.value;
    debugger;
    that.setState({ info });
  }
  // return updateFunc.bind(that);
}