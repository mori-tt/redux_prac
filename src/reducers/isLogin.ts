interface Action {
  type: string;
}

const isLoginReducer = (state = false, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
