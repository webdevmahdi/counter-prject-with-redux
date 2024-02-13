import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="bg-slate-200 flex border border-purple-400 rounded-md p-10">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="rounded-md text-xl px-3 py-3 bg-green-500 text-white font-semibold"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="rounded-md text-xl px-3 py-3 bg-green-500 text-white font-semibold"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="rounded-md text-xl px-3 py-3 bg-red-500 text-white font-semibold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
