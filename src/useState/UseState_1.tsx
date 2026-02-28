import { useState } from "react";

function UseState_1() {
  const [age, setAge] = useState<number>(0);
  const handleAddAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <input type="text" />
      <button className="border p-2 rounded-md bg-red-100" onClick={handleAddAge}>
        Add Age
      </button>
      <p>Age: {age}</p>
    </div>
  );
}

export default UseState_1;
