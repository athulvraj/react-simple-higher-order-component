import { useState } from "react";
import withCounter from "./withCounter";
function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3 style={{ color: props.color }}>{count}</h3>
      <button
        style={{ color: props.color }}
        onClick={() => setCount(count + 1)}
      >
        Update
      </button>
    </div>
  );
}
export default withCounter(Counter);
