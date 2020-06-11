export const update = (field, that) => {
  return (e) => {
    let info = that.state.info;
    info[field] = e.currentTarget.value;
    that.setState({ info });
  }
}

