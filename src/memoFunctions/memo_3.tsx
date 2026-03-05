import { useMemo, useState } from "react";

const Memo_3 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = (count: number) => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };

  const doubleCount = useMemo(() => double(count2), [count2]);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p>counter : {count1}</p>
      <button
        className="border border-blue-300 bg-blue-300 rounded hover:bg-blue-400 p-2"
        onClick={() => setCount1(count1 + 1)}
      >
        Increment count1
      </button>
      <p>
        counter : {count2}, {doubleCount}
      </p>
      <button
        className="border border-blue-300 bg-blue-300 rounded hover:bg-blue-400 p-2"
        onClick={() => setCount2(count2 + 1)}
      >
        Increment count2
      </button>
    </div>
  );
};

export default Memo_3;
