import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, login } from "./actions";
import { RootState } from "./reducers";
import { Dispatch } from "redux";

function App() {
  const counter = useSelector((state: RootState) => state.counter);
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const dispatch: Dispatch = useDispatch();
  return (
    <>
      <h1>Hello Redux</h1>
      <h3>カウント: {counter}</h3>
      <div>
        <button onClick={() => dispatch(increment(7))}>+</button>
        <button onClick={() => dispatch(decrement(8))}>-</button>
      </div>

      {isLogin ? <h3>ログイン成功！</h3> : <h3>ログインしてください</h3>}
      <button onClick={() => dispatch(login())}>
        {isLogin ? "ログアウト" : "ログイン"}
      </button>
    </>
  );
}

export default App;
