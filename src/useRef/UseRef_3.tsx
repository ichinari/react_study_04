import { useRef, useState } from "react";

function UseRef_3() {
  const [inputValue, setInputValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsShow(true);
    console.log(inputRef.current?.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsShow(false);
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <input
        type="text"
        className="border border-black text-black rounded-md p-2"
        value={inputValue}
        ref={inputRef}
        onChange={handleChange}
      />
      <button type="button" className="border p-2 rounded-md bg-gray-200" onClick={handleClick}>
        Click to check input value
      </button>
      {isShow && (
        <p>
          Value: <span className="font-bold">{inputValue}</span>
        </p>
      )}
    </div>
  );
}

export default UseRef_3;
