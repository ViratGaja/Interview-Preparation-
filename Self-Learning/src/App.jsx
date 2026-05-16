import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  increment,
  decrement,
  reset
} from "./Components/About";

function App(){

  const dispatch = useDispatch();

  const count = useSelector(
    (state) => state.counter.count
  );

  return(

    <div>

      <h1>{count}</h1>

      <button
        onClick={() =>
          dispatch(increment())
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch(decrement())
        }
      >
        -
      </button>

      <button
        onClick={() =>
          dispatch(reset())
        }
      >
        Reset
      </button>

    </div>

  );
}

export default App;