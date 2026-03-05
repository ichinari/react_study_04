import { useState, memo } from "react";

const Memo_1 = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  console.log("Parent Count");

  return (
    <div className="flex items-center flex-col">
      <div className="flex gap-5">
        <button
          className="border border-blue-500 bg-blue-500 rounded-2xl p-2 hover:bg-blue-300"
          onClick={() => setCount1(count1 + 1)}
        >
          Parent Count
        </button>
        <button
          className="border border-blue-500 bg-blue-500 rounded-2xl p-2 hover:bg-blue-300"
          onClick={() => setCount2(count2 + 1)}
        >
          Child Count
        </button>
      </div>
      <div className="flex gap-5 mt-5">
        <p>Parent: {count1}</p>
        <Child count2={count2} />
      </div>
    </div>
  );
};

// NOTE: React Compiler使用を前提のプロジェクトなら、memoの記載は不要（自動で避けてくれる）
const Child = memo(({ count2 }: { count2: number }) => {
  console.log("Child Count");

  let i = 0;
  while (i < 10000000) i++;
  return <p>Child: {count2}</p>;
});

export default Memo_1;
