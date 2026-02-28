import { useRef } from "react";

function UseRef_1() {
  // NOTE: レンダリング前後で変更しても、レンダリング前の値が取得できる
  const ref = useRef("useRef");

  const handleClick = () => {
    ref.current = "useRef clicked";
    console.log(ref);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <button className="border p-2 rounded-md bg-gray-200" onClick={handleClick}>
        Click me
      </button>
      <p></p>
    </div>
  );
}

export default UseRef_1;
