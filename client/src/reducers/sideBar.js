const sideBar = (state = { visible: false }, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { visible: action.payload };
    default:
      return state;
  }
};

export default sideBar;
