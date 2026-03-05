import { memo, useState } from "react";
import { useToggle } from "./hooks/useToggle";

const Memo_2 = () => {
  const [count, setCount] = useState<number>(0);

  console.log("Parent Count");

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p>Parent Count: {count}</p>
      <button
        className="border border-blue-300 bg-blue-300 p-3 rounded hover:bg-blue-400"
        onClick={() => setCount(count + 1)}
      >
        Parent Count
      </button>
      <Child />
    </div>
  );
};

const Child = memo(() => {
  console.log("Child Count");
  const [on, toggle] = useToggle();

  let i = 0;
  while (i < 10000000) i++;
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p>Child Count: {on ? "ON" : "OFF"}</p>
      <button
        className="border border-blue-300 bg-blue-300 p-3 rounded hover:bg-blue-400"
        onClick={toggle}
      >
        Child Count
      </button>
    </div>
  );
});

export default Memo_2;
