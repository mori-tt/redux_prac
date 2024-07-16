interface IncrementAction {
  type: "INCREMENT";
  payload: number;
}

interface DecrementAction {
  type: "DECREMENT";
  payload: number;
}

interface LoginAction {
  type: "LOGIN";
}

export const increment = (number: number): IncrementAction => {
  return { type: "INCREMENT", payload: number };
};

export const decrement = (number: number): DecrementAction => {
  return { type: "DECREMENT", payload: number };
};

export const login = (): LoginAction => {
  return { type: "LOGIN" };
};
