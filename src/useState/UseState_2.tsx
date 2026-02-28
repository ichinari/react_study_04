import { useState } from "react";

function UseState_2() {
  const [formData, setFormData] = useState<{ name: string; age: string; email: string }>({
    name: "",
    age: "",
    email: "",
  });

  return (
    <>
      <div className="flex gap-2 p-10">
        <div>
          <label htmlFor="name" className="mr-2">
            ①
          </label>
          <input
            type="text"
            className="border border-black"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="age" className="mr-2">
            ②
          </label>
          <input
            type="text"
            className="border border-black"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="mr-2">
            ③
          </label>
          <input
            type="text"
            className="border border-black"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <p>①: {formData.name}</p>
        <p>②: {formData.age}</p>
        <p>③: {formData.email}</p>
      </div>
    </>
  );
}

export default UseState_2;
