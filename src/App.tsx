import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="bg-slate-200 flex border border-purple-400 rounded-md p-10">
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
