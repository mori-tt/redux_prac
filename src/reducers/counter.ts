interface Action {
  type: string;
  payload?: number;
}

const counterReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload || 0;
    case "DECREMENT":
      return state - action.payload || 0;
    default:
      return state;
  }
};

export default counterReducer;
